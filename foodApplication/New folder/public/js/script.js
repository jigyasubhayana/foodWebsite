
const clients = ["Everyone", "Fitness Freaks", "Vegans", "Developers"];
const h1 = document.getElementById("spans");
function typewriter(clients, h1) {
    let txt = " ";
    let isDeleting = false;
    let wordIndex = 0;
    function typer() {
        wordIndex = wordIndex % clients.length;
        let word = clients[wordIndex];
        if (isDeleting) {
            txt = word.substring(0, txt.length - 1);
        }
        else {
            txt = word.substring(0, txt.length + 1);
        }
        if (txt.length == word.length && isDeleting == false) {
            isDeleting = true;
        } else if (isDeleting == true && txt == "") {
            wordIndex++;
            isDeleting = false;
        }

        h1.textContent = txt;

        setTimeout(function () {

            typer();
        }, 300)
    }
    typer();
}

typewriter(clients, h1);


const nav = document.querySelector("nav");
const features = document.querySelector(".features");

window.addEventListener("scroll", function() {
  let pos = features.getBoundingClientRect().top;
  if (pos < 0) {
    nav.setAttribute("class", "sticky");
  }else{
    nav.removeAttribute("class","sticky");
  }
});
