import "../styles/home.css";
import "../styles/wedding-info.css";
import { CalendarOutlined, ClockCircleOutlined, EnvironmentOutlined, SkinOutlined } from "@ant-design/icons";

export default function WeddingInfo() {
  // Endereço do local do casamento
  const address = "Rua Fernando Silva, 110 - Jardim do Sol, Sorocaba - SP, 18017-034";
  const addressEncoded = encodeURIComponent(address);

  // Links para navegação
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${addressEncoded}`;
  const wazeLink = `https://www.waze.com/ul?q=${addressEncoded}&navigate=yes`;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="autumn-background">
      <section className="page-section">
        <h1 className="page-title">Informações da Cerimônia</h1>
        <p className="page-subtitle">Todos os detalhes para o nosso grande dia</p>

        <div className="info-container">
          {/* Card de Informações Unificado */}
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon"><CalendarOutlined /></div>
              <div className="info-content">
                <h3 className="info-label">Data</h3>
                <p className="info-value">04 de Abril de 2026</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><ClockCircleOutlined /></div>
              <div className="info-content">
                <h3 className="info-label">Horário</h3>
                <p className="info-value">18h</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><EnvironmentOutlined /></div>
              <div className="info-content">
                <h3 className="info-label">Local</h3>
                <p className="info-value">Restaurante Via Brasil</p>
                <p className="info-address">{address}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><SkinOutlined /></div>
              <div className="info-content">
                <h3 className="info-label">Traje</h3>
                <p className="info-value">Venha como se sentir confortável — traje casual.</p>
              </div>
            </div>
          </div>

          {/* Mapa do Google */}
          <div className="map-container">
            <h3 className="map-title">Localização</h3>
            <div className="map-wrapper">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${addressEncoded}`}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do casamento"
              ></iframe>
            </div>

            {/* Botões de Navegação */}
            <div className="navigation-buttons">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button google-maps"
              >
                <EnvironmentOutlined />
                Abrir no Google Maps
              </a>

              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button waze"
              >
                <EnvironmentOutlined />
                Abrir no Waze
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
