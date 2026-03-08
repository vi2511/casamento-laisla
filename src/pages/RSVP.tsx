import { Form, Input, Button, InputNumber, Modal } from "antd";
import { UserOutlined, MailOutlined, TeamOutlined, WhatsAppOutlined } from "@ant-design/icons";
import type { RSVPFormData } from "../types";
import "../styles/home.css";

const { TextArea } = Input;

export default function RSVP() {
  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();

  const onFinish = (values: RSVPFormData) => {
    // Format the WhatsApp message
    const whatsappMessage = encodeURIComponent(
      ` *Confirmação de Presença* \n\n` +
      ` *Nome:* ${values.fullName}\n` +
      ` *Email:* ${values.email || 'Não informado'}\n` +
      ` *Adultos:* ${values.adults}\n` +
      ` *Crianças:* ${values.children || 0}\n` +
      ` *Mensagem:* ${values.message || 'Nenhuma mensagem'}`
    );

    // WhatsApp number (replace with the actual number)
    const whatsappNumber = '5515991217140';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Show confirmation modal
    modal.success({
      title: "Que alegria!",
      content: (
        <div>
          <p>Você será redirecionado para o WhatsApp para confirmar sua presença.</p>
          <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
            Se o WhatsApp não abrir automaticamente, clique no botão abaixo.
          </p>
        </div>
      ),
      okText: "Abrir WhatsApp",
      onOk: () => {
        window.open(whatsappUrl, '_blank');
        form.resetFields();
      },
      icon: <WhatsAppOutlined style={{ color: '#25D366' }} />,
    });

    // Auto-open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
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
              className="submit-button"
              icon={<WhatsAppOutlined />}
            >
              Enviar via WhatsApp
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
