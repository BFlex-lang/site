var main = document.getElementById("main");
var sections = ["0", "-100vw", "-200vw"];
var occurring = false;

function handleButtonClick(event, sectionIndex) {
    event.preventDefault();
    if (!occurring) {
        occurring = true;
        main.style.marginLeft = sections[sectionIndex];
        setTimeout(() => {
            occurring = false;
        }, 600);
    } else {
        console.warn("scroll through the pages more calmly");
    }
}

document.getElementById("homeButton").addEventListener("click", (event) => handleButtonClick(event, 0));
document.getElementById("aboutButton").addEventListener("click", (event) => handleButtonClick(event, 1));
document.getElementById("downloadButton").addEventListener("click", (event) => handleButtonClick(event, 2));
