function calcular() {
  
    var var1 = parseInt(document.getElementById('var1').value);
    var var2 = parseInt(document.getElementById('var2').value);


    var diferenca = Math.abs(var1 - var2);


    var dobroMaisTriplo = (2 * var1) + (3 * var2);

 
    var multiplicacao = var1 * var2;


    var maiorParaMenor = var1 > var2 ? `${var1}, ${var2}` : `${var2}, ${var1}`;

  
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <div class="resultado">A diferença entre as duas variáveis é: ${diferenca}</div>
        <div class="resultado">O dobro da primeira mais o triplo da segunda variável é: ${dobroMaisTriplo}</div>
        <div class="resultado">A multiplicação das duas variáveis é: ${multiplicacao}</div>
        <div class="resultado">Os valores das variáveis do maior para o menor: ${maiorParaMenor}</div>
    `;
}

