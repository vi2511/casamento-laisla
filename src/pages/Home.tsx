import { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "../styles/home.css";

import homeImg from "../assets/photos/home.jfif";

export default function Home() {
  // === CONTAGEM REGRESSIVA ===
  const weddingDate = new Date("2026-04-04T18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft("O grande dia chegou! 💍");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days} dias • ${hours} horas • ${minutes} minutos • ${seconds} segundos`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* === NOME DO CASAL === */}
      <h1 className="couple-name">
        Lincoln & Vinícius
      </h1>

      {/* === MOLDURA NOVA (Estilo Galeria) === */}
      <div className="home-photo-frame">
        <img
          src={homeImg} // TROQUE PELA FOTO REAL
          alt="casal"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* === FRASE ROMÂNTICA === */}
      <p className="romantic-quote">
        “O amor cresce como as folhas no outono: calmo, bonito e inevitável.”
      </p>

      {/* === CARD DA CONTAGEM REGRESSIVA === */}
      <div className="countdown-card">
        <h2 className="countdown-title">
          Contagem para o Grande Dia
        </h2>

        <div className="countdown-timer">
          {timeLeft}
        </div>
      </div>

      {/* === BOTÃO RSVP === */}
      <div>
        <Button
          size="large"
          className="rsvp-button"
        >
          <Link to="/rsvp" style={{ color: "white" }}>
            Confirmar Presença (RSVP)
          </Link>
        </Button>
      </div>
    </div>
  );
}
