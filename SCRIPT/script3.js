
    function calcularBalançoFinanceiro() {
        let ganhoAnual = 0;
        let gastoAnual = 0;
  

        for (let i = 1; i <= 12; i++) {
          let ganhoMensal = parseFloat(prompt("Digite o ganho bruto para o mês " + i + ":"));
          let gastoMensal = parseFloat(prompt("Digite os gastos para o mês " + i + ":"));
  
  
          if (!isNaN(ganhoMensal) && !isNaN(gastoMensal)) {
            ganhoAnual += ganhoMensal;
            gastoAnual += gastoMensal;
          } else {
            alert("Por favor, insira valores numéricos válidos.");
            return;
          }
        }
  

        let saldoFinanceiro = ganhoAnual - gastoAnual;
  

        let resultado = saldoFinanceiro >= 0 ? "lucro" : "prejuízo";

        document.getElementById('resultado').innerHTML = "<strong>Ganho bruto anual:</strong> " + ganhoAnual.toFixed(2) + "<br>" +
                                                           "<strong>Gasto anual:</strong> " + gastoAnual.toFixed(2) + "<br>" +
                                                           "<strong>Saldo financeiro:</strong> " + saldoFinanceiro.toFixed(2) + "<br>" +
                                                           "A empresa teve " + resultado + ".";
    }