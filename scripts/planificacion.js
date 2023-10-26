
const viajeImg = document.querySelectorAll(".principal-planificacion__img");
const arrowLeft = document.querySelector(".encabezado-arrow__left");
const arrowRight = document.querySelector(".encabezado-arrow__right");
const image = document.querySelector(".encabezado-planificacion");

const btnBuscar = document.querySelector(".encabezado-buscador__buscar");

let destino = document.querySelector(".encabezado-buscador__input-dest");
let fechaD = document.querySelector(".encabezado-buscador__input-fechD");
let fechaH = document.querySelector(".encabezado-buscador__input-fechH");
let adult = document.querySelector(".encabezado-buscador__input-adult");
let kid = document.querySelector(".encabezado-buscador__input-kid");

let contenido = ['../images/imgen0.jpg', '../images/imgen1.jpg', '../images/imgen2.jpg', '../images/imgen3.jpg', '../images/imgen4.jpg'];
let posicionAct = 0;


arrowRight.addEventListener('click', () => {

    if (posicionAct >= 0 && posicionAct < 4) {
        posicionAct++;
        image.style.backgroundImage = `url(${contenido[posicionAct]})`;
    } else {
        posicionAct = 0;
        image.style.backgroundImage = `url(${contenido[posicionAct]})`;
    }
});

arrowLeft.addEventListener('click', () => {

    if (posicionAct <= 0) {
        posicionAct = 4;
        image.style.backgroundImage = `url(${contenido[posicionAct]})`;
    } else {
        posicionAct--;
        image.style.backgroundImage = `url(${contenido[posicionAct]})`;
    }
});


viajeImg.forEach(image => {
    image.addEventListener('click', () => {
        window.location.href = "pendiente.html";
    });
})


btnBuscar.addEventListener('click', () => {

    let destinoAct = destino.value;
    let fechaDAct = fechaD.value;
    let fechaHAct = fechaH.value;
    let adultAct = adult.value;
    let kidAct = kid.value;

    if ((destinoAct.trim().length != "") && (fechaDAct.trim().length != "") && (fechaHAct.trim().length != "") && (adultAct.trim().length != "")) {
        localStorage.setItem('Destino', destinoAct);
        localStorage.setItem('Fecha desde', fechaDAct);
        localStorage.setItem('Fecha hasta', fechaHAct);
        localStorage.setItem('Adultos', adultAct);
        localStorage.setItem('Niños', kidAct);

        if (fechaDAct < fechaHAct) {
            location.href = 'reserva.html';
        } else {
            alert("Las fechas están mal introducidas");
        }

    } else {
        alert("No has rellenado los campos correctamente");
    }
    /*El return es para que escupa la información al navegador*/
    return;
});



