// script.js
const produtos = [
    { nome: "Arroz", preco: 4.95, quantidade: 4 },
    { nome: "Feijão", preco: 5.95, quantidade: 4 },
    { nome: "Carne Bovina", preco: 23.00, quantidade: 1.5 },
    { nome: "Farinha", preco: 6.25, quantidade: 1.5 },
    { nome: "Biscoito Richester", preco: 3.25, quantidade: 5 },
    { nome: "Salgadinho Elma Chips", preco: 2, quantidade: 5 },
    { nome: "Filé de Peixe", preco: 22.50, quantidade: 3.5 },
    { nome: "Refresco em Pó Tang", preco: 1.05, quantidade: 6 },
    { nome: "Açúcar Refinado", preco: 3.75, quantidade: 3 },
    { nome: "Nescau Cereal", preco: 11.15, quantidade: 2 },
    { nome: "Sucrilhos Cereal", preco: 9.25, quantidade: 2 },
];

const tabela = document.getElementById("produtos");
const tbody = tabela.querySelector("tbody");

function calcularTotais() {
    let faturamentoTotal = 0;

    produtos.forEach(produto => {
        produto.total = produto.preco * produto.quantidade;
        faturamentoTotal += produto.total;
    });

    produtos.forEach(produto => {
        produto.percentual = (produto.total / faturamentoTotal) * 100;
    });
}

function renderizarTabela() {
    calcularTotais();

    // Calcular o faturamento total
    let faturamentoTotal = produtos.reduce((total, produto) => total + produto.total, 0);

    // Exibir o faturamento total
    const elementoFaturamentoTotal = document.getElementById("faturamentoTotal");
    elementoFaturamentoTotal.textContent = `R$ ${faturamentoTotal.toFixed(2)}`;


    tbody.innerHTML = "";

    produtos.forEach(produto => {
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.total.toFixed(2)}</td>
            <td>${produto.percentual.toFixed(2)}%</td>
        `;
        tbody.appendChild(novaLinha);
    });
}

renderizarTabela();