
const servicesGrid = document.getElementById("servicesGrid");

function renderizarServicosHome() {
    if (!servicesGrid) return;

    const servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    servicesGrid.innerHTML = "";

    servicos.forEach((servico) => {
        const card = document.createElement("article");
        card.classList.add("service-card");

        const icone = document.createElement("div");
        icone.classList.add("service-icon");
        icone.textContent = "✂";

        const info = document.createElement("div");
        info.classList.add("service-info");

        const nome = document.createElement("h3");
        nome.textContent = servico.nome;

        const descricao = document.createElement("p");
        descricao.textContent = servico.descricao;

        const preco = document.createElement("span");
        preco.classList.add("service-price");
        preco.textContent = Number(servico.preco).toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );

        info.appendChild(nome);
        info.appendChild(descricao);
        info.appendChild(preco);

        card.appendChild(icone);
        card.appendChild(info);

        servicesGrid.appendChild(card);
    });
}

renderizarServicosHome();
