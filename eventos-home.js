
const eventosGrid = document.getElementById("eventosGrid");

function renderizarEventosHome() {
    if (!eventosGrid) return;

    const eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    eventosGrid.innerHTML = "";

    if (eventos.length === 0) {
        eventosGrid.innerHTML = "<p>Nenhum evento disponível no momento.</p>";
        return;
    }

    eventos.forEach((evento) => {
        const card = document.createElement("article");
        card.classList.add("event-card");

        const titulo = document.createElement("h3");
        titulo.textContent = evento.nomee || "Evento";

        const descricao = document.createElement("p");
        descricao.textContent = evento.desce || "";

        card.appendChild(titulo);
        card.appendChild(descricao);

        if (evento.atrelado && evento.atrelado !== "Não") {
            const servico = document.createElement("p");
            servico.classList.add("event-service");
            servico.textContent = "Serviço relacionado: " + evento.atrelado;
            card.appendChild(servico);
        }

        eventosGrid.appendChild(card);
    });
}

renderizarEventosHome();
