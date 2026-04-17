 function agendar() {
            let valor = document.getElementById("dataHora").value;
            document.getElementById("resultado").innerText = 
                "Agendado para: " + valor;
        }