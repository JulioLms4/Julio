

function ordenarDecrescente() {

  let numeros = [];
  for (let i = 0; i < 4; i++) {
    let valor = parseInt(prompt("Digite o " + (i+1) + "º valor inteiro:"));
    if (!isNaN(valor)) {
      numeros.push(valor);
    } else {
      alert("Por favor, insira um valor inteiro válido.");
      return;
    }
  }


  numeros.sort(function(a, b) {
    return b - a;
  });


  document.getElementById('resultado').innerHTML = "Valores em ordem decrescente: " + numeros.join(", ");
}

