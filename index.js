const express = require('express');
const app = express();


function gerarTabuada(tabuada, sequencia) {
    let resultado = `<h1>Tabuada do ${tabuada}</h1><ul>`;
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
    }
    resultado += '</ul>';
    return resultado;
}


function validarEntrada(tabuada, sequencia) {
    if (isNaN(tabuada) || isNaN(sequencia) || tabuada < 0 || sequencia < 0) {
        return false;
    }
    return true;
}


app.get('/', (req, res) => {
  
    let tabuada = parseInt(req.query.tabuada) || 1;  
    let sequencia = parseInt(req.query.sequencia) || 10;  


    if (!isNaN(tabuada)) {
        const resultado = gerarTabuada(tabuada, sequencia);
        res.send(`
          <html>
            <head><title>Tabuada do ${tabuada}</title></head>
            <body>
            <br>
            <h1>Feito por Jéssica Maria de Angelo - 10442417613 </h1> 
              <h1>Tabuada do ${tabuada}</h1>
              <p>${resultado}</p>
            </body>
          </html>
        `);
      } else {
        res.send('Erro: Informe um número válido para a tabuada na URL. Exemplo: ?tabuada=3&sequencia=25');
      }
    });

    let htmlContent = gerarTabuada(tabuada, sequencia);

    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
});


module.exports = app;
