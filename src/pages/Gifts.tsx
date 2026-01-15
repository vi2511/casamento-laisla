import { Card, Typography } from "antd";
import { GiftOutlined } from "@ant-design/icons";
import "../styles/home.css";

const { Title, Paragraph } = Typography;
import qrcode from "../assets/photos/qrcode.jpg";

export default function Gifts() {
    return (
        <div style={{ minHeight: "100%", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card
                style={{
                    maxWidth: 600,
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "var(--card-bg)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                <GiftOutlined style={{ fontSize: "48px", color: "var(--accent-color)", marginBottom: "16px" }} />

                <Title level={2} style={{ color: "var(--text-primary)", fontFamily: "'Playfair Display', serif" }}>
                    Lista de Presentes
                </Title>

                <Paragraph style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "32px" }}>
                    A sua presença é o nosso maior presente! <br />
                    Optamos por não fazer uma lista de presentes tradicional.
                    Entretanto, caso deseje contribuir com o início da nossa vida a dois,
                    disponibilizamos um QR Code para que possa nos presentear com o valor que seu coração desejar,
                    sem que isso pese no seu orçamento.
                </Paragraph>


                {/* Placeholder for QR Code */}
                <img src={qrcode} alt="QR Code PIX" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />

            </Card>
        </div>
    );
}
