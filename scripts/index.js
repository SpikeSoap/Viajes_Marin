/* Constantes */

const btnIniciar = document.querySelector(".contenido-index__boton");
const btnMenu = document.querySelector(".boton-menu");
const contIndex = document.querySelector(".container-index");

btnIniciar.addEventListener('click', () => {
    location.href = "../pages/planificacion.html";
});

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

    modalForm(modal);
}

function modalForm(modal) {

    const modalForm = document.createElement("form");
    modalForm.className = "form-modal";
    modal.appendChild(modalForm);

    const formTitle = document.createElement("h2");
    formTitle.className = "form-modal__title";
    formTitle.textContent = "Únete a la familia";
    modalForm.appendChild(formTitle);

    const formContainer = document.createElement("section");
    formContainer.className = "form-modal__container";
    modalForm.appendChild(formContainer);

    const labelCorreo = document.createElement("label");
    labelCorreo.className = "form-modal__item";
    labelCorreo.textContent = "Correo *";
    formContainer.appendChild(labelCorreo);

    const inputCorreo = document.createElement("input");
    inputCorreo.className = "form-modal__item form-modal__input";
    inputCorreo.type = "email";
    inputCorreo.required = true;
    formContainer.appendChild(inputCorreo);

    const labelContra = document.createElement("label");
    labelContra.className = "form-modal__item";
    labelContra.textContent = "Contraseña *";
    formContainer.appendChild(labelContra);

    const inputContra = document.createElement("input");
    inputContra.className = "form-modal__item form-modal__input";
    inputContra.type = "email";
    inputContra.required = true;
    formContainer.appendChild(inputContra);

    const olvidoContra = document.createElement("p");
    olvidoContra.className = "form-modal__olvido";
    olvidoContra.textContent = "¿Has olvidado la contraseña?"
    formContainer.appendChild(olvidoContra);

    const iniSes = document.createElement("button");
    iniSes.className = "form-modal__input form-modal__inicioS";
    iniSes.textContent = "Iniciar sesión";
    formContainer.appendChild(iniSes);

    const opcionAlt = document.createElement("p");
    opcionAlt.className = "form-modal__o";
    opcionAlt.textContent = "o";
    formContainer.appendChild(opcionAlt);

    const contGoogle = document.createElement("button");
    contGoogle.className = "form-modal__input form-modal__google";
    contGoogle.innerHTML = '<img class="form-modal__logo-google" src="../images/googleLogo.jpg">Continuar con Google';
    formContainer.appendChild(contGoogle);

    const registrar = document.createElement("button");
    registrar.className = "form-modal__input form-modal__registrar";
    registrar.textContent = "Iniciar sesión"
    formContainer.appendChild(registrar);

    const letraPeq = document.createElement("p");
    letraPeq.className = "form-modal__letra-peq";
    letraPeq.innerHTML = 'Si continúas, aceptas los <a class="form-modal__politicas" href = "https://policy.pinterest.com/es/terms-of-service"> Términos del servicio </a > de Pinterest y confirmas que has leído nuestra <a class="form-modal__politicas" href="https://policy.pinterest.com/es/privacy-policy"> Política de privacidad. </a> <a class="form-modal__politicas" href="https://policy.pinterest.com/es/notice-at-collection"> Aviso de recopilación de datos.</a>';
    formContainer.appendChild(letraPeq);

}

let btnClose = document.querySelector(".modal-encabezado__close");
let modalCont = document.querySelector(".container__modal");

if (btnClose) {
    // btnClose.addEventListener('click', () => {
    //     // modalCont.classList.remove('show');
    //     // modalCont.remove();
    //     console.log("efvhbpweikfvb");
    // });

    btnClose.onClick = remove;

    function remove(){
        console.log(";edfvjn");
    }

    // btnClose.onClick = remove;

    // function remove() {
    //     this.remove();
    // }

    
    // btnClose.onclick = bgColor;

    // function bgColor(){
    //     modalCont.style.background = "blue";
    // }

    
}







// https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D694505692171-31closf3bcmlt59aeulg2j81ej68j6hk.apps.googleusercontent.com%26auto_select%3Dtrue%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Duse%26as%3Dfhl7Z85OZcQlkg3jSRZYiQ%26channel_id%3D25e5b337e5fb197bbd402b2e248b60f74f359a80efc3383b8cdb59ae71749d02%26origin%3Dhttps%3A%2F%2Fwww.pinterest.es&faa=1&ifkv=AVQVeyyY2x5ZTLb5dPoqjbaDEkBsdY9S3A9FGbzLmTGSAvPnANbORmimTO0vUDpjYa-1pAJpF8sgOQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1962621882%3A1697814215438098&theme=glif