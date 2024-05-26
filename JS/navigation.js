var main = document.getElementById("main");
var sections = ["0", "-100vw", "-200vw"];
var controller = 0;
var time = false;
var occurring = false;

document.getElementById("homeButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (occurring == false) {

        occurring = true;

        if (time == false) {
            time = true;
            controller = 0;
            setTimeout(() => {
                main.style.marginLeft = sections[controller];
                setTimeout(() => {
                    occurring = false;
                    time = false;

                }, 600)
            }, 100)
        }

    } else {
        console.warn("scroll through the pages more calmly")
    }


})

document.getElementById("aboutButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (occurring == false) {

        occurring = true;

        if (time == false) {
            time = true;
            controller = 1;
            setTimeout(() => {
                main.style.marginLeft = sections[controller];
                setTimeout(() => {

                    occurring = false;
                    time = false;

                }, 600)

            }, 100)
        }

    } else {
        console.warn("scroll through the pages more calmly")
    }


})

document.getElementById("downloadButton").addEventListener("click", (event) => {
    event.preventDefault();
    if (occurring == false) {

        occurring = true;

        if (time == false) {
            time = true;
            controller = 2;
            setTimeout(() => {
                main.style.marginLeft = sections[controller];
                setTimeout(() => {
                    occurring = false;
                    time = false;

                }, 600)
            }, 100)
        }
    } else {
        console.warn("scroll through the pages more calmly")
    }


})

