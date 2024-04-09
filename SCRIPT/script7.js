

function calcularPreco() {

  let saborSelecionado = document.getElementById('sabor').value;


  let preco;
  switch (saborSelecionado) {
    case 'chocolate':
      preco = 1.50;
      break;
    case 'morango':
    case 'creme':
      preco = 2.50;
      break;
    case 'manga':
      preco = 3.20;
      break;
    case 'melancia':
      preco = 3.40;
      break;
    case 'vanilla':
      preco = 3.00;
      break;
    case 'ceuazul':
      preco = 3.60;
      break;
    case 'brownie':
      preco = 4.00;
      break;
    case 'hawaiano':
      preco = 5.00;
      break;
    default:
      preco = 0; 
  }


  if (preco !== 0) {
    document.getElementById('resultado').innerHTML = "O preço do picolé é R$ " + preco.toFixed(2);
  } else {
    document.getElementById('resultado').innerHTML = "Por favor, selecione um sabor válido.";
  }
}