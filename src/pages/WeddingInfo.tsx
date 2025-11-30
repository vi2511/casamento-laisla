import "../styles/home.css";
import "../styles/wedding-info.css";

export default function WeddingInfo() {
  // Endereço do local do casamento
  const address = "Rua Exemplo, 123 - Bairro, Cidade - Estado, CEP 12345-678";
  const addressEncoded = encodeURIComponent(address);

  // Links para navegação
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${addressEncoded}`;
  const wazeLink = `https://www.waze.com/ul?q=${addressEncoded}&navigate=yes`;

  return (
    <div className="autumn-background">
      <section className="page-section">
        <h1 className="page-title">Informações da Cerimônia</h1>
        <p className="page-subtitle">Todos os detalhes para o nosso grande dia</p>

        <div className="info-container">
          {/* Card de Informações */}
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon">📅</div>
              <div className="info-content">
                <h3 className="info-label">Data</h3>
                <p className="info-value">04 de Abril de 2026</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕐</div>
              <div className="info-content">
                <h3 className="info-label">Horário</h3>
                <p className="info-value">18:00 horas</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3 className="info-label">Local</h3>
                <p className="info-value">Espaço Floratta</p>
                <p className="info-address">{address}</p>
              </div>
            </div>
          </div>

          {/* Mapa do Google */}
          <div className="map-container">
            <h3 className="map-title">Localização</h3>
            <div className="map-wrapper">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${addressEncoded}`}
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Abrir no Google Maps
              </a>

              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button waze"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                Abrir no Waze
              </a>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="additional-info">
            <h3 className="additional-title">Informações Importantes</h3>
            <ul className="additional-list">
              <li>🎩 Traje: Esporte Fino</li>
              <li>🎁 Lista de presentes disponível no menu</li>
              <li>📸 Haverá fotógrafo profissional</li>
              <li>🍽️ Jantar será servido às 19:30</li>
              <li>🎵 Festa até às 02:00</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
