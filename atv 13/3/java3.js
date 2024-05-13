function calcularDesconto() {
    // Captura os valores do formulário
    var nomeFuncionario = document.getElementById("nomeFuncionario").value;
    var salario = parseFloat(document.getElementById("salario").value);

    // Calcula o desconto com base no critério especificado
    var taxaDesconto;
    var valorDesconto;
    
    if (salario <= 1000) {
        taxaDesconto = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxaDesconto = 0.085;
    } else {
        taxaDesconto = 0.09;
    }

    // Calcula o valor do desconto
    valorDesconto = salario * taxaDesconto;

    // Exibe os resultados na página
    document.getElementById("resultadoNome").textContent = "Nome do Funcionário: " + nomeFuncionario;
    document.getElementById("resultadoSalario").textContent = "Salário em consideração: R$ " + salario.toFixed(2);
    document.getElementById("resultadoTaxaDesconto").textContent = "Taxa de desconto: " + (taxaDesconto * 100) + "%";
    document.getElementById("resultadoValorDesconto").textContent = "Valor do desconto: R$ " + valorDesconto.toFixed(2);
}