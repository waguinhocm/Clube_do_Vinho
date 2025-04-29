
//Main - captura e manipulação de dados do DOM

//Adicionando evento a imagem asterisco do Header

let asterisco = document.getElementById('asterisco');

asterisco.addEventListener('click', ()=> {
    document.body.style.backgroundColor = "aquamarine";
});
asterisco.addEventListener('dblclick', ()=> {
    document.body.style.backgroundColor = '#7454d9';
});

// Adicionando evento a imagem menu do Header

let menu = document.getElementById('menuOpcoesHeader');
menu.addEventListener('mouseover', ()=> {
    alert('Neste menu você poderá acessar as opções de vinhos mais recomendados do site');
});



//Dados salvos em um array

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

let main = document.querySelector("main");

let titulo = document.createElement("h1");
titulo.innerText = "Parcerias";

main.appendChild(titulo);

for (let i = 0; i < arrayParceiros.length; i++) {
    let parceiro = arrayParceiros[i];

    let div = document.createElement("div");
    div.classList.add("parceiro");

    div.innerHTML = `
        <a class="btn" href="${parceiro.link}"target="_blank"><img src="${parceiro.img}" alt="logo parceiro ${parceiro.nome}"height="100" width="200"></a>
        <h3 class="textoParceiro">${parceiro.descricao}</h3>
    `;
    main.appendChild(div);
};

//Footer - Logo

let navFooter = document.querySelector("footer nav");
let divLogoRodape = document.createElement("div");
divLogoRodape.innerHTML = `
<a href="../index.html"><img src="../imagens/Logo_pag.png" alt="Logotipo"height="42" width="52"></a>
<h6>Copyright 2025 Clube do Vinho</h6>
`;
navFooter.appendChild(divLogoRodape);
divLogoRodape.className = "rodape";
navFooter.className = "rodape";

//Footer - Navegação

sectionNavRodape = document.createElement("section");
sectionNavRodape.classList.add("navRodape");

arrayNavRodape = [
    {
        nome: "Politicas de Privacidade",
        link: "../politicaPrivacidade/index.html"
    },

    {
        nome: "Contato",
        link: "../contato/index.html"
    },
    {
        nome: "Sobre nós",
        link: "../sobre_nos/index.html"
    },
];

for (let i = 0; i < arrayNavRodape.length; i++) {
    let nav = arrayNavRodape[i];

    let section = document.createElement("section");
    section.classList.add("navRodape");

    section.innerHTML = `
        <a href="${nav.link}">${nav.nome}</a>
    `;
    section.className = "navRodape";
    sectionNavRodape.appendChild(section);
};

navFooter.appendChild(sectionNavRodape);

//Footer - Redes Sociais

let arrayRedesSociais = [
    {
        nome: "Instagram",
        link: "https://www.instagram.com/",
        img: "../imagens/Instagran.png"
    },
    {
        nome: "Youtube",
        link: "https://www.youtube.com/",
        img: "../imagens/Youtube.png"
    },
    {
        nome: "Facebook",
        link: "https://www.facebook.com/",
        img: "../imagens/Facebook.png"
    },

];

let sectionRedes = document.createElement("section");
sectionRedes.classList.add("redesSociais");

for (let i = 0; i < arrayRedesSociais.length; i++) {
    let redeSocial = arrayRedesSociais[i];

    let div = document.createElement("div");
    div.classList.add("redeSocial");

    div.innerHTML = `
        <a href="${redeSocial.link}" target="_blank"><img src="${redeSocial.img}" alt="logo ${redeSocial.nome}"height="30" width="30"></a>
    `;
    div.className = "redes";
    sectionRedes.appendChild(div);
};
navFooter.appendChild(sectionRedes);
