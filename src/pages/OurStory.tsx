import "../styles/home.css";
import primeiraImg from "../assets/photos/ourStory/primeira.jpeg";

export default function OurStory() {
  return (
    <div>
      <section className="page-section">
        <h1 className="page-title">Nossa História</h1>
        <p className="page-subtitle">Como tudo começou...</p>

        <div className="story-container">
          {/* Item 1 */}
          <div className="story-item">
            <div className="story-image-container">
              <img src={primeiraImg} alt="O Encontro" className="story-image" />
            </div>
            <div className="story-content">
              <span className="story-date">O Primeiro encontro</span>
              <p className="story-text">
                Aquele convidado inesperado para a festa de aniversário, virou
                um bate papo que teve início num sábado frio, durante o churras
                com a galera na saudosa Fazenda Ipanema. No retorno para casa
                veio a pergunta: “Posso deitar no seu colo?” E dali em diante,
                os assuntos em comum, as bandas preferidas e o carinho se
                findaram numa sexta ensolarada, do dia 5 de agosto de 2005, na
                Praça da Amizade: “E aí, vamos começar nossa história?” :){" "}
                <br></br>
                <br></br>
                20 dias se passaram, ops, 20 anos hehe…e cá continuamos nós,
                compartilhando de muita história (e bota história nisso), e logo
                mais, do capítulo mais importante de nossas vidas: receber a
                benção do matrimônio com todos vocês de testemunhas do nosso
                amor e de toda vida que temos pela frente! <br></br>
                <br></br>
                Obrigada por fazer parte, te esperamos em breve!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
