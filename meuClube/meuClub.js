const vinhos = [
    {
      nome: "Vinho Reservado Concha y Toro",
      img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/866-vinho-concha-y-toro-reservado-cabernet-sauvignon-750ml.jpg?fm=webp&p=product_regular&s=d4e4ba91debaff5a46dbe143563224ec",
      rating: "4.1",
      categoria: "recentes"
    },
    {
      nome: "Vinho Casillero Del Diablo",
      img: "https://d1zvfmhlebc91g.cloudfront.net/fit-in/456x751/filters:fill(ffffff)/filters:background_color(ffffff)/filters:quality(100)/n49shopv2_boccatispa/images/products/4598/5d93b71770bea-vinho-casillero-del-diablo-reserva-merlot_.jpg",
      rating: "4.7",
      categoria: "favoritos"
    },
    {
      nome: "Vinho Benjamin",
      img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/9786-vinho-benjamin-nieto-branco-suave-e-refrescante-750ml.jpg?s=871a43eb60ed20c0514ccb8bca7e4d38",
      rating: "4.7",
      categoria: "jabebi"
    },
    {
      nome: "Vinho Casal Garcia",
      img: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/623-vinho-casal-garcia-branco-750ml.jpg?s=e705af184a4f5afcc5bbbfcd4d98482c",
      rating: "4.7",
      categoria: "querobeber"
    }
  ];
  
  const winesSection = document.querySelector('#wines');
  
  function renderizarVinhos(filtroCategoria) {
    winesSection.innerHTML = '';
  
    const vinhosFiltrados = vinhos.filter(v => v.categoria === filtroCategoria);
  
    vinhosFiltrados.forEach(vinho => {
      const wineHTML = `
        <article class="wineContour">
          <span class="rating">${vinho.rating}</span>
          <div>
            <img src="${vinho.img}" height="300px" width="150px" alt="Imagem de um vinho">
          </div>
          <div class="wineButtons">
            <p>${vinho.nome}</p>
            <button>❤️</button>
            <button>➕</button>
            <button>...</button>
          </div>
        </article>
        <br><br><br>
      `;
      winesSection.innerHTML += wineHTML;
    });
  }
  
  // Eventos nos botões
  document.querySelectorAll('.btn a').forEach(botao => {
    botao.addEventListener('click', event => {
      event.preventDefault();
  
      const href = botao.getAttribute('href');
      const categoria = href.replace('.html', '').toLowerCase(); // pega 'recentes', 'favoritos' etc
  
      renderizarVinhos(categoria);
    });
  });
  
  // Opcional: renderizar uma categoria padrão
  renderizarVinhos("recentes");