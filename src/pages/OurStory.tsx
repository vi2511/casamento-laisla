import "../styles/home.css";

export default function OurStory() {
  return (
    <div className="autumn-background">
      <section className="page-section">
        <h1 className="page-title">Nossa História</h1>
        <p className="page-subtitle">Como tudo começou...</p>

        <div className="story-container">
          {/* Item 1 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src="https://via.placeholder.com/400x300?text=O+Encontro"
                alt="O Encontro"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">Outono de 2018</span>
              <h2 className="story-title">O Primeiro Olhar</h2>
              <p className="story-text">
                Nos conhecemos em uma tarde ensolarada no parque. Lincoln estava lendo um livro e Vinícius, passeando com seu cachorro, parou para pedir uma informação. A conversa fluiu tão naturalmente que parecia que já nos conhecíamos de outras vidas. Trocamos telefones e, desde aquele dia, não paramos mais de nos falar.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src="https://via.placeholder.com/400x300?text=Primeira+Viagem"
                alt="Primeira Viagem"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">Inverno de 2019</span>
              <h2 className="story-title">A Primeira Viagem</h2>
              <p className="story-text">
                Nossa primeira viagem juntos foi para as montanhas. Entre trilhas, vinhos e lareiras, percebemos que éramos os melhores companheiros de aventura um do outro. Foi ali, sob um céu estrelado, que dissemos "eu te amo" pela primeira vez.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src="https://via.placeholder.com/400x300?text=O+Pedido"
                alt="O Pedido"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">Primavera de 2024</span>
              <h2 className="story-title">O Grande Pedido</h2>
              <p className="story-text">
                Durante um piquenique surpresa no mesmo parque onde nos conhecemos, Lincoln se ajoelhou. Com as mãos trêmulas e o coração acelerado, ele fez a pergunta que mudaria nossas vidas para sempre. A resposta, claro, foi um emocionado "SIM!".
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src="https://via.placeholder.com/400x300?text=O+Futuro"
                alt="O Futuro"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">O Futuro</span>
              <h2 className="story-title">Rumo ao Altar</h2>
              <p className="story-text">
                Agora, estamos contando os dias para celebrar nosso amor com as pessoas mais importantes de nossas vidas. Mal podemos esperar para escrever os próximos capítulos dessa história ao lado de vocês.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
