import { Card, Typography, Carousel } from "antd";
import { GiftOutlined } from "@ant-design/icons";
import "../styles/home.css";

const { Title, Paragraph } = Typography;
import qrcode from "../assets/photos/qrcode.png";
import img1 from "../assets/photos/gifts/0979ba9b-bd51-4a23-a35d-b23f2e73175a.jfif";
import img2 from "../assets/photos/gifts/1fbdc211-6cb4-41eb-9803-e1857e597c97.jfif";
import img3 from "../assets/photos/gifts/2653b348-6b14-468d-a412-01491ac43996.jfif";
import img4 from "../assets/photos/gifts/28802e69-cc9e-45ae-865d-e637905b745f.jfif";
import img5 from "../assets/photos/gifts/2e7d0a05-4a3b-4aaf-aaeb-6d98075bb606.jfif";
import img6 from "../assets/photos/gifts/3d395074-1854-4e21-8a23-ae1d96e8eb9c.jfif";
import img7 from "../assets/photos/gifts/5913de23-09c9-46b7-8a1b-c586a937f1d6.jfif";
import img8 from "../assets/photos/gifts/675210f5-fc80-4290-aaef-37b758ff3d86.jfif";
import img9 from "../assets/photos/gifts/6fff255f-5823-461c-bba1-eb5d2aea2169.jfif";
import img10 from "../assets/photos/gifts/a0361ccc-1895-422e-b6dd-6e9217d49fee.jfif";
import img11 from "../assets/photos/gifts/ad469bc4-0f84-4f0c-b25f-81a74b0f003a.jfif";
import img12 from "../assets/photos/gifts/af7d8dc3-8acb-4cd2-8a91-871f61eaec90.jfif";
import img13 from "../assets/photos/gifts/daa87cbc-91d2-4bb6-8dbf-22b8642c8dfb.jfif";
import img14 from "../assets/photos/gifts/dabd3bea-d062-4b4f-9d19-ddfb967bce60.jfif";
import img15 from "../assets/photos/gifts/e1b34f30-ca25-4def-a5d1-a408a2d888df.jfif";
import img16 from "../assets/photos/gifts/f713648b-260f-44dd-852e-87a4c8455b2b.jfif";

const giftImages = [
  { src: img1, caption: "Batedeira - 220v" },
  { src: img2, caption: "Tanquinho de Lavar Roupas 20kg - 220v" },
  { src: img3, caption: "Panela Pipoqueira" },
  { src: img4, caption: "Aspirador de Pó - 220v" },
  { src: img5, caption: "Puff" },
  { src: img6, caption: "Jogo de Facas" },
  { src: img7, caption: "Cutelo" },
  { src: img8, caption: "Frigideira Wok" },
  { src: img9, caption: "Multiprocessador - 220v" },
  { src: img10, caption: "Climatizador - 220v" },
  { src: img11, caption: "Travessa de Vidro" },
  { src: img12, caption: "Liquidificador Preto - 220v" },
  { src: img13, caption: "PlayStation 5" },
  { src: img14, caption: "Secador de Cabelo - 220v" },
  { src: img15, caption: "Cafeteira Elétrica - 220v" },
  { src: img16, caption: "Pote de vidro" },
];

export default function Gifts() {
  return (
    <div
      style={{
        minHeight: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        <GiftOutlined
          style={{
            fontSize: "48px",
            color: "var(--accent-color)",
            marginBottom: "16px",
          }}
        />

        <Title
          level={2}
          style={{
            color: "var(--text-primary)",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Lista de Presentes
        </Title>

        <Paragraph
          style={{
            fontSize: "13px",
            lineHeight: "1.8",
            color: "var(--text-secondary)",
            marginBottom: "32px",
          }}
        >
          A sua presença é o nosso maior presente! <br />
          A sua presença é o
          nosso maior presente! Optamos por não fazer uma lista de presentes
          tradicional, no entanto, caso deseje contribuir com o início de nossa
          jornada, disponibilizamos o QR Code abaixo e algumas sugestões de
          presentes. Sinta-se à vontade para nos presentear com o que seu
          coração deseja!
        </Paragraph>

        {/* Placeholder for QR Code */}
        <img
          src={qrcode}
          alt="QR Code PIX"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            marginBottom: "32px",
          }}
        />

        <Title
          level={3}
          style={{
            color: "var(--text-primary)",
            fontFamily: "Arial, Helvetica, sans-serif",
            marginTop: "16px",
            marginBottom: "24px",
          }}
        >
          Algumas Ideias
        </Title>

        <Carousel
          autoplay
          effect="fade"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          {giftImages.map((image, i) => (
            <div key={i} style={{ position: "relative" }}>
              <img
                src={image.src}
                alt={image.caption}
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.6)",
                  padding: "12px",
                  color: "white",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
              >
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {image.caption}
                </Typography.Text>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>
    </div>
  );
}
