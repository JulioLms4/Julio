function calcular() {
    var var1 = parseInt(document.getElementById("var1").value);
     var var2 = parseInt(document.getElementById("var2").value);



     var diferenca = var1 - var2;
        var expressao = (2 * var1) + (3 * var2);
        var multiplicacao = var1 * var2;




        document.getElementById("resultado-diferenca").innerHTML = "Diferença entre as duas variáveis: " + diferenca;
        document.getElementById("resultado-expressao").innerHTML = "O dobro da primeira variável mais o triplo da segunda: " + expressao;
        document.getElementById("resultado-multiplicacao").innerHTML = "A multiplicação das duas variáveis: " + multiplicacao;



        var maior = Math.max(var1, var2);
        var menor = Math.min(var1, var2);
        document.getElementById("resultado-ordem").innerHTML = "Variável 1: " + maior + "<br>Variável 2: " + menor;
}