/* Constantes */

const btnIniciar = document.querySelector(".contenido-index__boton");
const btnMenu = document.querySelector(".boton-menu");
const contIndex = document.querySelector(".container-index");

// btnIniciar.addEventListener('click', () => {
//     location.href = "../pages/planificacion.html";
// });

btnMenu.addEventListener('click', () => {
    crearModal();
});


function crearModal() {
    const modalCont = document.createElement("div");
    modalCont.className = "container__modal";
    modalCont.classList.add('show');
    contIndex.append(modalCont);

    const modal = document.createElement("div");
    modal.className = "modal";
    modalCont.appendChild(modal);

    modalEncabezado(modal)
}


function modalEncabezado(modal) {
    const modalEnca = document.createElement("div");
    modalEnca.className = "modal-encabezado";
    modal.appendChild(modalEnca);

    const encaFigure = document.createElement("figure");
    encaFigure.className = "modal-encabezado__figure";
    modalEnca.appendChild(encaFigure);

    const modalLogo = document.createElement("img");
    modalLogo.className = "modal-encabezado__logo";
    modalLogo.src = "../images/logo.png";
    encaFigure.appendChild(modalLogo);

    const encaButton = document.createElement("button");
    encaButton.className = "modal-encabezado__button";
    modalEnca.appendChild(encaButton);

    const buttonClose = document.createElement("img");
    buttonClose.className = "modal-encabezado__close";
    buttonClose.src = "../images/close icon.png";
    encaButton.appendChild(buttonClose);

    // modalForm(modal);
}


// let btnClose = document.querySelector(".modal-encabezado__close");
// let modalCont = document.querySelector(".container__modal");

// if (btnClose) {
//     btnClose.addEventListener('click', () => {
//         // modalCont.classList.remove('show');
//         // modalCont.remove();
//         console.log("efvhbpweikfvb");
//     });

    
// }

const btnPrin = document.querySelector(".contenido-index__boton");

btnPrin.addEventListener('click', ()=>{

    btnPrin.remove();

});