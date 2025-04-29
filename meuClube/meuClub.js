const vinhos = [
  {
    id: "concha",
    nome: "Vinho Reservado Concha y Toro",
    img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/866-vinho-concha-y-toro-reservado-cabernet-sauvignon-750ml.jpg?fm=webp&p=product_regular&s=d4e4ba91debaff5a46dbe143563224ec",
    rating: "4.1",
    categorias: ["recentes"]
  },
  {
    id: "daiblo",
    nome: "Vinho Casillero Del Diablo",
    img: "https://d1zvfmhlebc91g.cloudfront.net/fit-in/456x751/filters:fill(ffffff)/filters:background_color(ffffff)/filters:quality(100)/n49shopv2_boccatispa/images/products/4598/5d93b71770bea-vinho-casillero-del-diablo-reserva-merlot_.jpg",
    rating: "4.7",
    categorias: ["recentes"]
  },
  {
    id: "benjamin",
    nome: "Vinho Benjamin",
    img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/9786-vinho-benjamin-nieto-branco-suave-e-refrescante-750ml.jpg?s=871a43eb60ed20c0514ccb8bca7e4d38",
    rating: "4.7",
    categorias: ["jabebi"]
  },
  {
    id: "Garcia",
    nome: "Vinho Casal Garcia",
    img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/623-vinho-casal-garcia-branco-750ml.jpg?s=e705af184a4f5afcc5bbbfcd4d98482c",
    rating: "4.7",
    categorias: ["querobeber"]
  }
];

let categoriaAtual = "recentes";
const mapeamentoCategorias = {
  'JÁ BEBI': 'jabebi',
  'QUERO BEBER': 'querobeber',
  'FAVORITAR': 'favoritos',
  'REVIEWS': 'reviews'
};

const winesSection = document.querySelector('#wines');

function renderizarVinhos() {
  winesSection.innerHTML = '';

  const vinhosFiltrados = vinhos.filter(vinho => {
    if (categoriaAtual === "favoritos") {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      return favorites.includes(vinho.id);
    }
    return vinho.categorias.includes(categoriaAtual);
  });

  vinhosFiltrados.forEach(vinho => {
    const wineHTML = `
      <article class="wineContour">
        <span class="rating">${vinho.rating}</span>
        <div id="felx">  
          <img src="${vinho.img}">
          <p>${vinho.nome}</p>
        </div>
        <div class="wineButtons">
          <button class="btn favorite" data-id="${vinho.id}">❤️</button>
          <button class="btn-add" data-id="${vinho.id}">➕</button>
          <button class="btn-review" data-id="${vinho.id}">...</button>

          <ul class="dropdown-vinho">
            <li><a href="#">JÁ BEBI</a></li>
            <li><a href="#">QUERO BEBER</a></li>
            <li><a href="#">FAVORITAR</a></li>
            <li><a href="#">REVIEWS</a></li>
          </ul>
        </div>
      </article>
      <br><br><br>
    `;
    winesSection.innerHTML += wineHTML;
  });

  menuVinho();
  favorito();
  adicionarCarrinho();
}

function mudarCategoria(novaCategoria) {
  categoriaAtual = novaCategoria;
  renderizarVinhos();
}

document.querySelectorAll('.nav-btn').forEach(botao => {
  botao.addEventListener('click', event => {
    event.preventDefault();
    const categoria = botao.dataset.categoria;
    if (categoria) mudarCategoria(categoria);
  });
});

function menuVinho() {
  document.querySelectorAll(".btn-review").forEach(button => {
    button.addEventListener("click", function(e) {
      e.stopPropagation(); 
      document.querySelectorAll(".dropdown-vinho")
        .forEach(dd => dd.style.display = "none");

      const dropdown = this.parentElement.querySelector(".dropdown-vinho");
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
  });

  document.querySelectorAll(".dropdown-vinho a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const acao = this.textContent.trim();
      const vinhoId = this.closest(".wineButtons").querySelector(".btn-add").dataset.id;
      const vinho = vinhos.find(v => v.id === vinhoId);

      if (vinho) {
        if (acao === "JÁ BEBI" || acao === "QUERO BEBER") {
          const novaCategoria = mapeamentoCategorias[acao];
          const categoriaConflito = acao === "JÁ BEBI" ? "querobeber" : "jabebi";
          
          vinho.categorias = vinho.categorias.filter(cat => 
            cat !== categoriaConflito && cat !== novaCategoria
          );
          vinho.categorias.push(novaCategoria);
        }

        if (acao === "FAVORITAR") {
          const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          const index = favorites.indexOf(vinhoId);
          
          if (index === -1) {
            favorites.push(vinhoId);
          } else {
            favorites.splice(index, 1);
          }
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }

        renderizarVinhos();
      }
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-vinho").forEach(d => d.style.display = "none");
  });
}

function favorito() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  document.querySelectorAll(".btn.favorite").forEach(button => {
    const wineId = button.dataset.id;
    button.textContent = favorites.includes(wineId) ? "💖" : "❤️";

    button.addEventListener("click", () => {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const index = favorites.indexOf(wineId);

      if (index === -1) {
        favorites.push(wineId);
      } else {
        favorites.splice(index, 1);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderizarVinhos();
    });
  });
}

  function login() {
    const dropdownTriggerLogin = document.getElementById(
      "dropdown-trigger-login"
    );
    const dropdownLogin = document.getElementById("dropdown-login");
    const dropdownMenu = document.getElementById("dropdown-menu");
  
    dropdownTriggerLogin.addEventListener("click", function (evento) {
      evento.stopPropagation();
  
      if (dropdownMenu) {
        dropdownMenu.style.display = "none";
      }
  
      if (dropdownLogin.style.display === "block") {
        dropdownLogin.style.display = "none";
      } else {
        dropdownLogin.style.display = "block";
      }
    });
  
    document.addEventListener("click", function () {
      dropdownLogin.style.display = "none";
    });
  }
  function menu() {
    const dropdownTriggerMenu = document.getElementById("dropdown-trigger-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownLogin = document.getElementById("dropdown-login");
  
    dropdownTriggerMenu.addEventListener("click", function (evento) {
      evento.stopPropagation();
  
      if (dropdownLogin) {
        dropdownLogin.style.display = "none";
      }
  
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      } else {
        dropdownMenu.style.display = "block";
      }
    });
  
    document.addEventListener("click", function () {
      dropdownMenu.style.display = "none";
    });
  }
  function adicionarCarrinho() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    document.querySelectorAll(".btn-add").forEach((button) => {
      const wineId = button.getAttribute("data-id");
  
      if (cart.find(vinho => vinho.id === wineId)) {
        button.textContent = "✔️";
      } else {
        button.textContent = "➕";
      }
  
      button.addEventListener("click", function () {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        if (cart.find(vinho => vinho.id === wineId)) {
          alert("Esse vinho já está na sua lista!");
        } else {
          const vinhoSelecionado = vinhos.find(v => v.id === wineId);
  
          if (vinhoSelecionado) {
            cart.push({ 
              id: vinhoSelecionado.id, 
              nome: vinhoSelecionado.nome, 
              img: vinhoSelecionado.img, 
              rating: vinhoSelecionado.rating 
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            button.textContent = "✔️";
            alert("Vinho adicionado à lista!");
          } else {
            alert("Vinho não encontrado!");
          }
        }
      });
    });
  }
  
  renderizarVinhos();
login();
menu();
  