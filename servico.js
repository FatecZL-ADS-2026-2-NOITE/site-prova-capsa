let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

const formServico = document.getElementById("formservico");
const tabelaBodyServico = document.getElementById("tabelaservicos");

function renderizarservicos() {
    if (!tabelaBodyServico) return;    
    tabelaBodyServico.innerHTML = "";

    servicos.forEach((servico) => {
       let tr = document.createElement("tr");

        // Cria e preenche as colunas da tabela
        tr.innerHTML = `
            <td>${servico.nome}</td>
            <td>${servico.descricao}</td>
            <td>R$ ${Number(servico.preco).toFixed(2)}</td>
        `;

        tabelaBodyServico.appendChild(tr);
    });
}
renderizarservicos();

if (formServico) {
    formServico.addEventListener("submit", function(event) {
        event.preventDefault();

        let nomeinput = document.getElementById("nome").value;
        let descricaoinput = document.getElementById("desc").value;
        let precoinput = Number(document.getElementById("preco").value);

        let novoservico = {
            nome: nomeinput,
            descricao: descricaoinput,
            preco: precoinput
        };

        servicos.push(novoservico);
        localStorage.setItem("servicos", JSON.stringify(servicos));

        renderizarservicos();
        formServico.reset();
    });
}