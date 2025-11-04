import { useState, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CardTransitions.css';
import './App.css'

function App() {
  const [currentInfo, setCurrentInfo] = useState("None");

  const infoData = {
    "None": {texto: "Selecione uma informação acima para saber mais."},
    "O_Que_E": {texto: "O equilíbrio dinâmico é a capacidade de manter o corpo estável enquanto ele está em movimento. Diferente do equilíbrio estático, que ocorre quando estamos parados, o equilíbrio dinâmico envolve ajustes constantes do corpo para manter a postura e a trajetória durante atividades que exigem deslocamento ou mudança de posição. Em termos fisiológicos, ele depende da interação entre sistema nervoso, músculos e articulações, que trabalham juntos para detectar deslocamentos do centro de gravidade e corrigir pequenas instabilidades. Por exemplo, ao caminhar, correr ou pedalar, o corpo está constantemente fazendo pequenas correções para não perder o equilíbrio. Nesse sentido, o equilíbrio dinâmico não é apenas uma questão de força ou coordenação, mas também de percepção sensorial, incluindo visão, audição e propriocepção (percepção do corpo no espaço)."},
    "Para_Que_Serve": {texto: "O equilíbrio dinâmico é essencial para a segurança e eficiência dos movimentos. Ele permite que o corpo: - Execute atividades diárias de forma segura, como caminhar em terrenos irregulares, subir escadas ou carregar objetos sem perder estabilidade. - Previna lesões: mantendo o corpo estável, reduz o risco de quedas, torções e outros acidentes. - Aprimore o desempenho esportivo: esportes como futebol, ginástica, skate e corrida exigem ajustes rápidos do corpo para responder a mudanças de direção e manter a postura correta. - Aprimore a coordenação motora e a propriocepção, habilidades fundamentais para todas as idades, mas especialmente importantes para crianças em desenvolvimento e idosos, que tendem a ter maior risco de desequilíbrios. Em resumo, o equilíbrio dinâmico é um pilar da funcionalidade corporal, permitindo movimentos seguros, coordenados e eficientes em diversas situações."},
    "Importante_Treinar": {texto: "Treinar o equilíbrio dinâmico oferece múltiplos benefícios físicos e neurológicos: - Fortalecimento muscular: exercícios de equilíbrio fortalecem músculos estabilizadores, especialmente do core, quadris e pernas, que são essenciais para manter a postura em movimento. - Melhoria da coordenação motora: movimentos que desafiam o equilíbrio forçam o corpo a ajustar-se constantemente, aumentando a precisão e agilidade dos movimentos. - Redução do risco de quedas: treinamento regular aumenta a capacidade de resposta a estímulos inesperados, como escorregões ou obstáculos. - Desenvolvimento da propriocepção: melhora a percepção do corpo no espaço, permitindo movimentos mais controlados e eficientes. - Benefícios cognitivos e funcionais: estudos indicam que treinar equilíbrio também pode melhorar atenção, tempo de reação e memória motora, pois o cérebro precisa processar informações sensoriais rapidamente. Portanto, o treinamento do equilíbrio dinâmico é indicado tanto para atletas quanto para pessoas comuns, incluindo idosos, crianças e pacientes em reabilitação."}
  }

  const currentInfoText = infoData[currentInfo].texto;
  const nodeRef = useRef(null);

  return (
    <>
      <div>
        <h1>Equilíbrio Dinâmico</h1>
        <h2>Encontre informações e interfaces das funções interativas do grupo "Equilíbrio Dinâmico" da PPI Info2 aqui.</h2><br></br><br></br>

        <center> {/* a cacilda do styles abaixo não centralizou, então coloquei center*/}
          <div styles={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="infoButtonsBar">
              <button onClick={() => setCurrentInfo("O_Que_E")}>O que é equilíbrio dinâmico</button>
              <button onClick={() => setCurrentInfo("Para_Que_Serve")}>Para que serve</button>
              <button onClick={() => setCurrentInfo("Importante_Treinar")}>Por que é importante treinar</button>
            </div>

            <br></br>

            <TransitionGroup className="transicao-wrapper">
              <CSSTransition
                key={currentInfo}
                timeout={500}
                classNames="card-anim"
                nodeRef={nodeRef}
              >
                <div ref={nodeRef} className="infoCard">
                  <h3>{currentInfoText}</h3>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </center>
      </div>
    </>
  )
}

export default App
