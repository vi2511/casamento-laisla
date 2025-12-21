import { Form, Input, Button, InputNumber, Modal, message } from "antd";
import { UserOutlined, MailOutlined, TeamOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { apiService } from "../services/api";
import type { RSVPFormData } from "../types";
import "../styles/home.css";

const { TextArea } = Input;

export default function RSVP() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

  const [messageApi, contextHolderMessage] = message.useMessage();

  useEffect(() => {
    // Check for backup data on load
    const backup = localStorage.getItem("rsvp_backup");
    if (backup) {
      try {
        const values = JSON.parse(backup);
        form.setFieldsValue(values);
        messageApi.info("Dados restaurados do seu último preenchimento.");
      } catch (e) {
        localStorage.removeItem("rsvp_backup");
      }
    }
  }, [form]);

  const showFallbackError = (errorMessage?: string) => {
    const whatsappMessage = encodeURIComponent(
      `Olá! Tentei confirmar presença pelo site mas não consegui. \n\n` +
      `Nome: ${form.getFieldValue('fullName')}\n` +
      `Email: ${form.getFieldValue('email')}\n` +
      `Adultos: ${form.getFieldValue('adults')}\n` +
      `Crianças: ${form.getFieldValue('children')}\n` +
      `Mensagem: ${form.getFieldValue('message') || 'Nenhuma'}`
    );

    const whatsappUrl = `https://wa.me/5515996727262?text=${whatsappMessage}`;

    modal.error({
      title: "Não foi possível conectar",
      content: (
        <div>
          <p>{errorMessage || "Ocorreu um erro ao tentar enviar seus dados."}</p>
          <p>Mas não se preocupe! Bloqueamos seus dados no navegador. Você pode tentar novamente mais tarde ou enviar diretamente pelo WhatsApp:</p>
          <Button
            type="primary"
            icon={<WhatsAppOutlined />}
            href={whatsappUrl}
            target="_blank"
            style={{ backgroundColor: '#25D366', borderColor: '#25D366', marginTop: '10px' }}
          >
            Enviar via WhatsApp
          </Button>
        </div>
      ),
      okText: "Entendi",
      width: 500,
    });
  };

  const onFinish = async (values: RSVPFormData) => {
    setLoading(true);
    // Save backup immediately
    localStorage.setItem("rsvp_backup", JSON.stringify(values));

    // Smart feedback for cold start
    const coldStartTimer = setTimeout(() => {
      messageApi.open({
        type: 'loading',
        content: 'Iniciando o servidor... Isso pode levar alguns segundos.',
        duration: 0,
        key: 'cold_start'
      });
    }, 3000);

    try {
      const response = await apiService.submitRSVP(values);

      clearTimeout(coldStartTimer);
      messageApi.destroy('cold_start');

      if (response.success) {
        localStorage.removeItem("rsvp_backup"); // Clear backup on success
        modal.success({
          title: "Que alegria!",
          content: "Sua presença foi confirmada. Estamos ansiosos para celebrar com você!",
          okText: "Maravilha!",
        });
        form.resetFields();
      } else {
        showFallbackError(response.error);
      }
    } catch (error) {
      clearTimeout(coldStartTimer);
      messageApi.destroy('cold_start');
      console.error("Error submitting RSVP:", error);
      showFallbackError("Erro inesperado na aplicação.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100%" }}>
      {contextHolder}
      {contextHolderMessage}
      <div className="rsvp-container">
        <h1 className="rsvp-title">
          Confirme sua Presença
        </h1>
        <p className="rsvp-description">
          Por favor, preencha o formulário abaixo até o dia 4/3/2026.
        </p>

        <Form
          form={form}
          name="rsvp_form"
          layout="vertical"
          onFinish={onFinish}
          scrollToFirstError
          size="large"
        >
          <Form.Item
            name="fullName"
            label={<span className="form-label">Nome Completo</span>}
            rules={[
              { required: true, message: "Por favor, insira seu nome completo!" },
              { min: 3, message: "O nome deve ter pelo menos 3 caracteres." },
            ]}
          >
            <Input prefix={<UserOutlined className="form-icon" />} placeholder="Seu nome" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<span className="form-label">E-mail</span>}
            rules={[
              { type: "email", message: "O e-mail não é válido!" },
              { required: true, message: "Por favor, insira seu e-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined className="form-icon" />} placeholder="seu@email.com" />
          </Form.Item>


          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Form.Item
              name="adults"
              label={<span className="form-label">Adultos</span>}
              initialValue={1}
              style={{ flex: "1 1 150px" }}
              rules={[{ required: true, message: "Informe a quantidade de adultos" }]}
            >
              <InputNumber min={1} max={10} style={{ width: "100%" }} prefix={<TeamOutlined className="form-icon" />} />
            </Form.Item>

            <Form.Item
              name="children"
              label={<span className="form-label">Crianças</span>}
              initialValue={0}
              style={{ flex: "1 1 150px" }}
            >
              <InputNumber min={0} max={10} style={{ width: "100%" }} />
            </Form.Item>
          </div>


          <Form.Item
            name="message"
            label={<span className="form-label">Mensagem para os Noivos</span>}
          >
            <TextArea rows={4} placeholder="Deixe uma mensagem de carinho..." />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={loading}
              className="submit-button"
            >
              Confirmar Presença
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
