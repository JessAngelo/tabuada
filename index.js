const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


function gerarTabuada(numero, sequencia) {
  let resultado = '';
  for (let i = 0; i <= sequencia; i++) {
    resultado += `${numero} x ${i} = ${numero * i}<br>`;
  }
  return resultado;
}


app.get('/tabuada', (req, res) => {

  const tabuada = parseInt(req.query.tabuada);
  const sequencia = parseInt(req.query.sequencia) || 10;

  
  if (!isNaN(tabuada)) {
    const resultado = gerarTabuada(tabuada, sequencia);
    res.send(`
      <html>
        <head><title>Tabuada do ${tabuada}</title></head>
        <body>
          <h1>Feito por: Jéssica Maria de Angelo </h1>
          <br>
          <br>
          <h1>Tabuada do ${tabuada}</h1>
          <p>${resultado}</p>
        </body>
      </html>
    `);
  } else {
    res.send('Erro: Informe um número válido para a tabuada na URL. Exemplo: ?tabuada=3&sequencia=25');
  }
});


app.listen
