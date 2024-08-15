
function abrirModal() {
    document.getElementById('modal').style.display = 'block';
}
function abrirModalc() {
  document.getElementById('modalc').style.display = 'block';
  document.getElementById('modal').style.display = 'none';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalc').style.display = 'none';
}


const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
