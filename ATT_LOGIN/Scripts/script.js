function salvarDados(){

    const NomeLogin = document.getElementById('nome').value;
    const SenhaLogin = document.getElementById('senha').value;

    var LoginNome = 'Julio';
    var LoginSenha = '123';

    if((NomeLogin === LoginNome)&& (SenhaLogin === LoginSenha)){
        window.location.href = "outra.html";
    }else{
        alert('Usuario ou Senha Incorreta!');
    }

}


function mostrarDados(){
    alert('Usuario: Julio')
    alert('Senha: 123')

}