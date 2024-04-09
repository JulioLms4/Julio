
    function transformarNumero() {

      let numero = parseInt(document.getElementById('numero').value);


      let novoNumero;
      if (numero % 2 === 0) {
        novoNumero = numero + 1; 
      } else {
        novoNumero = numero - 1; 
      }


      document.getElementById('resultado').innerHTML = "O número transformado é: " + novoNumero;
    }
