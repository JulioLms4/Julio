function calcular() {

    var nomeFuncionario = document.getElementById("nomeFuncionario").value;
    var salario = parseFloat(document.getElementById("salario").value);


    var inss = salario * 0.08;

  
      var salarioLiquido = salario - inss;


    document.getElementById("resultadoNome").textContent = "Nome do Funcionário: " + nomeFuncionario;
    document.getElementById("resultadoSalario").textContent = "Salário bruto: R$ " + salario.toFixed(2);
    document.getElementById("resultadoINSS").textContent = "Valor do INSS: R$ " + inss.toFixed(2);
    document.getElementById("resultadoLiquido").textContent = "Salário líquido: R$ " + salarioLiquido.toFixed(2);
}