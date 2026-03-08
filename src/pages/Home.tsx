import { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "../styles/home.css";

import homeImg from "../assets/photos/home.jfif";

export default function Home() {
  // === CONTAGEM REGRESSIVA ===
  const weddingDate = new Date("2026-04-11T18:00:00").getTime();
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

      setTimeLeft(`${days} d • ${hours} h • ${minutes} min • ${seconds} s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">

      {/* === NOME DO CASAL === */}
      <h1 className="couple-name">
        Laisla & Alan
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
        “Cada passo nos trouxe até aqui, e daqui seguimos com amor e juntos para sempre.”
      </p>

      {/* === CARD DA CONTAGEM REGRESSIVA === */}
      <div className="countdown-card">
        <h1 className="countdown-title">
          Contagem para o Grande Dia
        </h1>

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
