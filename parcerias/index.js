let btnParceiros = document.querySelectorAll(".btn");

let txtParceiros = document.querySelectorAll(".textoParceiro");

let parceiros = document.querySelector(".parceiros");

let titulo = document.createElement("h1");
titulo.innerText = "Parcerias";

let main = document.querySelector("main")

main.appendChild(titulo);

for(let i=0; i <= 4; i++) {
    main.appendChild(btnParceiros[i]);
    main.appendChild(txtParceiros[i]);
}

