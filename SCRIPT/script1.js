function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
      let inputNumero = prompt("Digite um número (ou '0' para parar):");
      let numero = parseFloat(inputNumero);

      if (!isNaN(numero)) {
        soma += numero;
      } else {
        alert("Por favor, digite um número válido.");
      }


      if (inputNumero === '0') {
        continuar = false;
      }
    }


    document.getElementById('resultado').textContent = "A soma dos números digitados é: " + soma;
  }
