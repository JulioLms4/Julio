function calcularDesconto() {

    var nomeFuncionario = document.getElementById("nomeFuncionario").value;
    var salario = parseFloat(document.getElementById("salario").value);


    var taxaDesconto;
    var valorDesconto;
    
    if (salario <= 1000) {
        taxaDesconto = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaDesconto = 0.085;
    } else {
        taxaDesconto = 0.09;
    }

    valorDesconto = salario * taxaDesconto;

  
    document.getElementById("resultadoNome").textContent = "Nome do Funcionário: " + nomeFuncionario;
    document.getElementById("resultadoSalario").textContent = "Salário em consideração: R$ " + salario.toFixed(2);
    document.getElementById("resultadoTaxaDesconto").textContent = "Taxa de desconto: " + (taxaDesconto * 100) + "%";
    document.getElementById("resultadoValorDesconto").textContent = "Valor do desconto: R$ " + valorDesconto.toFixed(2);
}