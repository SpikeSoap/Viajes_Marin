
const viajeImg = document.querySelectorAll(".principal-planificacion__img");
const arrowLeft = document.querySelector(".encabezado-arrow__left");
const arrowRight = document.querySelector(".encabezado-arrow__right");
const image = document.querySelector(".encabezado-planificacion");
const btnBuscar = document.querySelector(".encabezado-buscador__buscar");
const viajeExtras = document.querySelectorAll(".encabezado-buscador__btn");

let origen = document.querySelector(".encabezado-buscador__input-origen");
let destino = document.querySelector(".encabezado-buscador__input-dest");
let fechaD = document.querySelector(".encabezado-buscador__input-fechD");
let fechaH = document.querySelector(".encabezado-buscador__input-fechH");
let adult = document.querySelector(".encabezado-buscador__input-adult");

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
        window.location.href = "../pages/pendiente.html";
    });
})


viajeExtras.forEach(extras => {
    extras.addEventListener('click', () => {
        window.location.href = "../pages/pendiente.html";
    });
})


btnBuscar.addEventListener('click', () => {
    let origenAct = origen.value;
    let destinoAct = destino.value;
    let fechaDAct = fechaD.value;
    let fechaHAct = fechaH.value;
    let adultAct = adult.value;

    if ((origenAct.trim().length != "") && (destinoAct.trim().length != "") && (fechaDAct.trim().length != "") && (fechaHAct.trim().length != "") && (adultAct.trim().length != "")) {
        sessionStorage.setItem('Destino', destinoAct);
        sessionStorage.setItem('Fecha desde', fechaDAct);
        sessionStorage.setItem('Fecha hasta', fechaHAct);
        sessionStorage.setItem('Adultos', adultAct);

        if (fechaDAct < fechaHAct) {
            location.href = '../pages/reserva.html';
        } else {
            alert("Las fechas están mal introducidas");
        }

    } else {
        alert("No has rellenado los campos correctamente");
    }
    /*El return es para que escupa la información al navegador*/
    return;
});



