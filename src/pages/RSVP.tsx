import { Form, Input, Button, InputNumber, Modal } from "antd";
import { UserOutlined, MailOutlined, TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import { apiService } from "../services/api";
import type { RSVPFormData } from "../types";
import "../styles/home.css";

const { TextArea } = Input;

export default function RSVP() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

  const onFinish = async (values: RSVPFormData) => {
    setLoading(true);

    try {
      const response = await apiService.submitRSVP(values);

      if (response.success) {
        modal.success({
          title: "Que alegria!",
          content: "Sua presença foi confirmada. Estamos ansiosos para celebrar com você!",
          okText: "Maravilha!",
        });
        form.resetFields();
      } else {
        modal.error({
          title: "Ops!",
          content: response.error || "Algo deu errado ao confirmar. Por favor, tente novamente ou entre em contato conosco.",
          okText: "Entendi",
        });
      }
    } catch (error) {
      modal.error({
        title: "Erro",
        content: "Erro ao confirmar presença. Por favor, tente novamente.",
        okText: "Fechar",
      });
      console.error("Error submitting RSVP:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100%" }}>
      {contextHolder}
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
