
function verificarTipo() {

  let letra = document.getElementById('letra').value.toLowerCase(); 


  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    document.getElementById('resultado').innerHTML = "A letra digitada é uma vogal.";
  }

  else if ((letra >= 'a' && letra <= 'z') && !["a", "e", "i", "o", "u"].includes(letra)) {
    document.getElementById('resultado').innerHTML = "A letra digitada é uma consoante.";
  }

  else {
    document.getElementById('resultado').innerHTML = "Por favor, digite uma única letra do alfabeto.";
  }
}

