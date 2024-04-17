function salvarDados(){
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;


    var login ={
        nome: nome,
        senha: senha,
    }

    console.log(login)
    console.log(nome)
    console.log(senha)
}

function mostrarDados(){

    var nome = document.getElementById('nome').value;
    var nome = document.getElementById('senha'). value;

document.getElementById("user").innerHTML = nome;
document.getElementById("pass").innerHTML = senha;



}