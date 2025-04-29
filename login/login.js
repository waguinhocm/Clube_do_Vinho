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

  login();
  menu();

  