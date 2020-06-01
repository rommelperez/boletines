
// obtener los elementos de la clas
let links = document.querySelectorAll(".close")
// rrecorrerlos
links.forEach(function (link) {
    // agregar un evento clic a cada uno de ellos
    link.addEventListener('click', function (ev) {
        ev.preventDefault();
        let conten = document.querySelector(".conten");
        // quitar las clases de animaion ya tienen
        conten.classList.remove("animate__animated")
        conten.classList.remove("animate__fadeInDown")
        // agregar clases para su salida
        conten.classList.add("animate__animated")
        conten.classList.add("animate__fadeOutUp")

        setTimeout(function () {
            location.href = "../index.html";
        }, 600);
        return false;

    });
});