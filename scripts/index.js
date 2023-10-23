import {crearModal} from "./modal.js";

/* Constantes */
const btnIniciar = document.querySelector(".contenido-index__boton");
const btnMenu = document.querySelector(".boton-menu");


btnIniciar.addEventListener('click', () => {
    location.href = "../pages/planificacion.html";
});

btnMenu.addEventListener('click', () => {
    crearModal();

   //funcionalidades
    btnClose();
    botonLogin();
    botonGoogle();

});



function btnClose() {
    let btnClose = document.querySelector(".modal-encabezado__close");
    let modalCont = document.querySelector(".container__modal");

    if (btnClose) {
        btnClose.addEventListener('click', () => {
            modalCont.classList.remove('show');
            modalCont.remove();
        });
    }
}


function botonLogin(){

    //TODO: hacer el apartado de registrarse
}

function botonGoogle() {
    let btnGoogle = document.querySelector(".form-modal__google");
    if (btnGoogle) {
        btnGoogle.addEventListener('click', () => {
            console.log("werftghjb");
            location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D694505692171-31closf3bcmlt59aeulg2j81ej68j6hk.apps.googleusercontent.com%26auto_select%3Dtrue%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Duse%26as%3Dfhl7Z85OZcQlkg3jSRZYiQ%26channel_id%3D25e5b337e5fb197bbd402b2e248b60f74f359a80efc3383b8cdb59ae71749d02%26origin%3Dhttps%3A%2F%2Fwww.pinterest.es&faa=1&ifkv=AVQVeyyY2x5ZTLb5dPoqjbaDEkBsdY9S3A9FGbzLmTGSAvPnANbORmimTO0vUDpjYa-1pAJpF8sgOQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1962621882%3A1697814215438098&theme=glif";
        });
    }
}
