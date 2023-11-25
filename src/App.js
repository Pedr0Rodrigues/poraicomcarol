import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [mensagem, setMensagem] = useState('');
  const [resposta, setResposta] = useState('');
  const [audio, setAudio] = useState(null);

  const handleStartMusic = () => {
    if (!audio) {
      const audioElement = new Audio('musica.mp3'); // Substitua pelo caminho real do seu arquivo de áudio
      audioElement.loop = true;
      audioElement.play();

      setAudio(audioElement);

      setPage(page + 1);
    }
  };

  useEffect(() => {
    // Pára a música quando a página é desmontada
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);
  const handleContinue = () => {
    setPage(page + 1);
  };

  const handleFinalSubmit = () => {
    setMensagem('Quer se casar comigo? ❤️');
    setPage(page + 1);
  };

  const handleResposta = (resposta) => {
    setResposta(resposta);
    if (resposta === 'nao') {
      setPage(5); // Voltar para a página da pergunta
    } else {
      setPage(page + 1);
    }
  };

  const handleLoopNao = () => {
    setResposta('nao');
    setPage(5); // Voltar para a página da pergunta
  };

  return (
    <div className="App">
      <header className="App-header">
        {page === 1 && (
          <>
            <h1>Oi, Mozão, tudo bem?</h1>
            <img src="img1.jpg" alt="Imagem 1" />
            <p>Essa foi a foto do nosso primeiro encontro, parece que foi ontem... Geralmente eu faria uma
              recordação dessas por papel, mas queria que você pudesse levar ela sempre a seu alcance. 
              Já passamos por muita coisa juntos - e aguardo que passemos cada vez mais. 
              </p>
              <p>  
              Assim sendo, Carol, espero que as próximas páginas possam
              acalentar seu coração como uma suave melodia.
            </p>
            <button onClick={handleStartMusic}>Continuar</button>
            <br/>
            <br/>
            <img src="img2.jpg" alt="Imagem 2" />
          </>
        )}

        {page === 2 && (
          <>
            <h1>Muitas Memórias</h1>
            <img src="img3.jpg" alt="Imagem 4" />

            <p>Os dias e as noites que compartilhamos são como capítulos preciosos 
              de um livro que estamos escrevendo juntos, uma história de amor  
              que se desdobra com cada risada compartilhada, cada momento difícil 
              e cada desafio superado. Cada momento ao seu lado é um presente</p>
   
            <button onClick={handleContinue}>Continuar</button>
          </>
        )}

        {page === 3 && (
          <>
            <h1>E Muitas Deventuras</h1>
            <img src="img5.jpg" alt="Imagem 5" />

            <p>Mas sem esquecer dos melhores momentos de rir das próprias desventuras!
              Como esquecer aquela insanidade que foi aquela peça de teatro? 
              Ou então aquele reveillón na casa de praia que durou 10 minutos? 
            </p>
            <p>
              Afinal de contas, alegria nos bons momentos é oportuna. Mas sua companhia para
              iluminar os momentos mais sombrios e desastrosos é o verdadeiro sinal de amor verdadeiro. 
            </p>
   
            <button onClick={handleContinue}>Continuar</button>
            <br/>
            <br/>
            <img src="img6.jpg" alt="Imagem 6" />
          </>
        )}
        {page === 4 && (
          <>
            <h1>Então vamos lá...</h1>
            <img src="img7.jpg" alt="Imagem 7" />

            <p>Como poderia então honrar de forma a altura tudo que vivemos até aqui? 
              Desbrucei-me pela questão por semanas, mas sem a iluminação divina.
            </p>
            <p>
              Todavia cheguei à conclusão que o mais importante de tudo eu já tenho: você ao meu lado.
              Assim sendo, por que não dar um próximo passo?
            </p>
   
            <button onClick={handleContinue}>Continuar</button>

          </>
        )}
        {page === 5 && resposta === 'nao' && (
          <>
            <h1>Certeza?</h1>
            <p>
              A gente pode comer chocolate!
            </p>
            <img src="imgfail.jpg" alt="Imagem 8" />
            <br></br>

            <button onClick={() => handleResposta('sim')}>Sim</button>
            <button onClick={() => handleResposta('nao')}>Não</button>
          </>
        )}

        {page === 5 && resposta == '' &&(
          <>
            <h1>O que você acha?</h1>
            <p>
              Maria Caroline, gostaria de casar comigo?
            </p>
            <img src="img9.png" alt="Imagem 9" />
            <br></br>

            <button onClick={() => handleResposta('sim')}>Sim</button>
            <button onClick={() => handleResposta('nao')}>Não</button>
          </>
        )}

        {page === 6 && resposta === 'sim' && (
          <>
            <h1>Tem certeza?</h1>
            <p>Eu sou bem chato, mas te amo muito!</p>
            <img src="imgsucess.jpg" alt="Imagem 8" />
            <br></br>
            <button onClick={() => handleResposta('sim')}>Sim, tenho certeza</button>
            <button onClick={() => handleLoopNao()}>Não, não tenho certeza</button>
          </>
        )}

        {page === 7 && resposta === 'sim' && (
          <>
            <h1>UHUULLL!!!</h1>
            <img src="img10.jpeg" alt="Imagem 9" />

            <p>Agora é hora de comemorarmos juntos!</p>
            <p>É muito obrigado por tudo que você é!</p>
            <button onClick={handleFinalSubmit}>Concluir</button>
          </>
        )}

        {page === 6 && resposta === 'nao' && (
          <>
            <h1>Loop após o Não</h1>
            <p>Texto após a resposta "não".</p>
            <button onClick={handleLoopNao}>Recomeçar</button>
          </>
        )}

        {page === 8 && (
          <>
            <h1>Próximo passo</h1>
            <p>Dia 13 de abril de 2024. Te aguardo lá!</p>
            <img src="imgfinal.jpg" alt="Imagem 9" />

          </>
        )}
      </header>
    </div>
  );
};

export default App;