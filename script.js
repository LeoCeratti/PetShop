function login(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let resultado = document.getElementById("resultado");
    
    if(login === "" || senha === ""){
        resultado.innerHTML = "Preencha todos os campos!";
        resultado.className = "erro";
        return; // <-- IMPORTANTE
    }

    resultado.innerHTML = "Login realizado com sucesso!";
    resultado.className = "sucesso";

    setTimeout(() => {
        window.location.href = "servicos.html";
    }, 1000);
}

// EVENTO FORA DA FUNÇÃO (correto)
const botaoLogin = document.getElementById("btnLogin");
if(botaoLogin){
    botaoLogin.addEventListener("click", login);
}
function agendar(){

    let nomePet = document.getElementById("nomePet").value;
    let tipoPet = document.getElementById("pet").value;
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let resultado = document.getElementById("resultado");


    if(nomePet === "" || tipoPet === "" || servico === "" || data === "" || hora === ""){
        resultado.innerHTML = "Preencha todos os campos!";
        
        resultado.className = "erro";
        return;
    }


    let partes = data.split("-");
    let dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];


    let agendamento = {
        nomePet,
        tipoPet,
        servico,
        data: dataFormatada,
        hora
    };

    let lista = JSON.parse(localStorage.getItem("agendamentos")) || [];
    lista.push(agendamento);
    localStorage.setItem("agendamentos", JSON.stringify(lista));

    resultado.innerHTML = `Foi registrado o agendamento do ${tipoPet} ${nomePet}, o(s) serviço(s) de ${servico} para o dia ${dataFormatada} às ${hora}.`;

    resultado.className = "sucesso";
    
}