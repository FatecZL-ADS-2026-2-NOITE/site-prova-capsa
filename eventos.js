let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

const formEvento = document.getElementById("formevento");
const tabelaBody = document.getElementById("tabelasevento");

const selectTemServico = document.getElementById("temServico");
const boxNomeServico = document.getElementById("boxNomeServico");
const inputNomeServico = document.getElementById("nomeServicoAtrelado");

// Alterna a exibição do campo do serviço atrelado
function verificarExibicaoServico() {
    if (selectTemServico && selectTemServico.value === "Sim") {
        if (boxNomeServico) boxNomeServico.style.display = "block";
    } else {
        if (boxNomeServico) boxNomeServico.style.display = "none";
        if (inputNomeServico) inputNomeServico.value = "";
    }
}

if (selectTemServico) {
    selectTemServico.addEventListener("change", verificarExibicaoServico);
    verificarExibicaoServico();
}

function renderizarevento() {
    if (!tabelaBody) return;    
    tabelaBody.innerHTML = "";

    eventos.forEach((evento) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${evento.nomee || ""}</td>
            <td>${evento.desce || ""}</td>
            <td>${evento.atrelado || "Não"}</td>
        `;

        tabelaBody.appendChild(tr);
    });
}

renderizarevento();

if (formEvento) {
    formEvento.addEventListener("submit", function(event) {
        event.preventDefault();

        let nomeeinput = document.getElementById("nomee").value;
        let descricaoeinput = document.getElementById("desce").value;
        
        let atreladoinput = "Não";
        if (selectTemServico && selectTemServico.value === "Sim") {
            let nomeServico = inputNomeServico ? inputNomeServico.value.trim() : "";
            atreladoinput = nomeServico !== "" ? nomeServico : "Sim (sem nome)";
        }

        let novoevento = {
            nomee: nomeeinput,
            desce: descricaoeinput,
            atrelado: atreladoinput
        };

        eventos.push(novoevento);
        localStorage.setItem("eventos", JSON.stringify(eventos));

        renderizarevento();

        formEvento.reset();
        verificarExibicaoServico();
    });
}