const menuButton = document.querySelector("aside.menu");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    menu.classList.toggle("open");
})

function close() {
    menuButton.classList.remove('active'); menu.classList.remove('open');
}

document.querySelector("main").addEventListener("click", () => {
    menuButton.classList.remove("active");
    menu.classList.remove("open");
})