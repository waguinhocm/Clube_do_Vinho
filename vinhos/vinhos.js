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

function menuVinho() {
  document.querySelectorAll(".btn-review").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      const wineButtonsDiv = this.parentElement;
      const dropdown = wineButtonsDiv.querySelector(".dropdown-vinho");

      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        document
          .querySelectorAll(".dropdown-vinho")
          .forEach((el) => (el.style.display = "none"));

        dropdown.style.display = "block";
      }
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown-vinho").forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  });
}

function favorito() {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  document.querySelectorAll(".btn-favorite, .btn.favorite").forEach(button => {
    const wineId = button.dataset.id; 
    button.textContent = favorites.includes(wineId) ? "💖" : "❤️";

    button.addEventListener("click", () => {
      favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (favorites.includes(wineId)) {
        favorites = favorites.filter(id => id !== wineId);
        button.textContent = "❤️";
      } else {
        favorites.push(wineId);
        button.textContent = "💖";
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });
}

function adicionarCarrinho() {
  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".btn-add").forEach((button) => {
      const wineId = button.getAttribute("data-id");

      if (cart.includes(wineId)) {
        button.textContent = "✔️";
      }

      button.addEventListener("click", function () {
        cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.includes(wineId)) {
          alert("Esse vinho já está na sua lista!");
        } else {
          cart.push(wineId);
          localStorage.setItem("cart", JSON.stringify(cart));
          button.textContent = "✔️";
          alert("Vinho adicionado à lista!");
        }
      });
    });
  });
}

login();
menu();
menuVinho();
favorito();
adicionarCarrinho();
