import "../styles/home.css";
import primeiraImg from "../assets/photos/ourStory/primeira.jfif";
import tentarImg from "../assets/photos/ourStory/tentar.jfif";
import pedidoImg from "../assets/photos/ourStory/pedido.jpg";
import altarImg from "../assets/photos/ourStory/altar.jfif";

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
              <img
                src={primeiraImg}
                alt="O Encontro"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">O primeiro olhar…</span>
              <p className="story-text">
                …aconteceu do jeito mais moderno possível (para a época, né?): através de uma tela do Orkut. Um simples “Olá!” nas comunidades, e dali engatamos con-versa atrás de conversa. Vieram as mensagens de boas festas, o tempo passou — seis meses voando — e finalmente o esperado: “Vamos nos ver?”. Um sorvete com risos tímidos e, sem perceber, começamos a nos ver toda semana. A internet uniu… o sorvete confirmou!
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src={tentarImg}
                alt="Primeira Viagem"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">Vamos tentar?</span>
              <p className="story-text">
                Percebendo que já nos víamos várias vezes por semana - e sempre querendo mais - veio aquela conclusão óbvia: ok, a gente vai namorar mesmo. A partir daí foi um turbilhão bom — viagens, risadas, festas, TCCs, perrengues, alegrias e tudo que vem no pacote. Até que um dia surgiu a frase que mudou o jogo: “Va
                mos comprar uma casa”.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src={pedidoImg}
                alt="O Pedido"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">O pedido</span>
              <p className="story-text">
                “Vamos almoçar pra comemorar nosso aniversário.” “E a tua promoção.”
                <br />
                Dia calmo. Ensolarado. Tudo perfeito: mesa arrumada, comida chegando, con-versa boa:
                <br />
                “Bom demais estar de namoro.”
                <br />
                “Casados, né? Moramos juntos.”
                <br />
                “Não. Não somos casados ainda.”
                <br />
                “Ah, nunca ninguém pediu.”
                <br />
                Repentinamente… tcharam! Alianças em mãos, coração acelerado:
                <br />
                “Então… casa comigo?”
                <br />
                O sorriso abriu mais do que o Sol daquele dia — surpresa, alegria, e o tipo de felicidade que a gente nunca esquece.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="story-item">
            <div className="story-image-container">
              <img
                src={altarImg}
                alt="O Futuro"
                className="story-image"
              />
            </div>
            <div className="story-content">
              <span className="story-date">Rumo ao Altar</span>
              <p className="story-text">
                Agora na contagem regressiva — e, sinceramente, já surtando um pouquinho de ansiedade e empolgação! Vai ser muito especial celebrar nosso amor com as pessoas que fazem parte da nossa vida de verdade. Mal podemos esperar para viver esse dia incrível e continuar escrevendo essa história com vocês por perto. Porque, né… tudo fica mais divertido quando a gente está bem acompanhado!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
