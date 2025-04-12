arrayParceiros = [
    {
        nome: "Evino",
        link: "https://www.evino.com.br/",
        img: "../imagens/Parceiro_Evino.png",
        descricao: "A Evino é uma plataforma que oferece uma ampla seleção de vinhos nacionais e importados, com foco em preços acessíveis e promoções frequentes. O site também disponibiliza um aplicativo para facilitar as compras."
    },
    {
        nome: "Wine",
        link: "https://www.wine.com.br/",
        img: "../imagens/Parceiro_Wine.png",
        descricao: "Reconhecida como um dos maiores clubes de assinatura de vinhos do mundo, a Wine oferece planos mensais que incluem uma seleção de rótulos, além de uma loja online com diversas opções. </"
    },
    {
        nome: "Divino",
        link: "https://www.divvino.com.br/",
        img: "../imagens/Parceiro_Divino.png",
        descricao: "A Divvino destaca-se pela variedade de vinhos de diferentes terroirs, tanto do velho quanto do novo mundo. O site oferece informações detalhadas sobre cada rótulo, incluindo dicas de harmonização e avaliações de clientes."
    },
    {
        nome: "Grand Cru",
        link: "https://www.grandcru.com.br/",
        img: "../imagens/Parceiro_Grand_Cru.png",
        descricao: "A Grand Cru é uma das maiores importadoras e distribuidoras de vinhos no Brasil, oferecendo uma seleção premium de rótulos de diversas partes do mundo. O site também possui um aplicativo para facilitar as compras e oferece descontos exclusivos."
    },
];

let titulo = document.createElement("h1");
titulo.innerText = "Parcerias";

let main = document.querySelector("main");

main.appendChild(titulo);

let div = document.createElement("div");

for (let i = 0; i < arrayParceiros.length; i++) {
    const parceiro = arrayParceiros[i];

    let div=document.createElement("div");
    div.classList.add("parceiro");

    div.innerHTML = `
        <a class="btn" href="${parceiro.link}"target="_blank"><img src="${parceiro.img}" alt="logo parceiro ${parceiro.nome}"height="100" width="200"></a>
        <h3 class="textoParceiro">${parceiro.descricao}</h3>
    `;
    main.appendChild(div);
};



