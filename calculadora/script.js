let displayValue = '';

function anexarDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function limpaDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calcular() {
  try {
    let resultado = eval(displayValue);
    document.getElementById('display').value = resultado;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Erro';
  }
}
