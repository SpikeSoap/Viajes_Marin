export function crearModal() {
    const contIndex = document.querySelector(".container");

    const modalCont = document.createElement("div");
    modalCont.className = "container__modal";
    modalCont.classList.add('show');
    contIndex.append(modalCont);

    const modal = document.createElement("div");
    modal.className = "modal";
    modalCont.appendChild(modal);

    modalEncabezado(modal);
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
    inputCorreo.className = "form-modal__item form-modal__input form-modal__correo";
    inputCorreo.type = "email";
    // inputCorreo.required = true;
    formContainer.appendChild(inputCorreo);

    const labelContra = document.createElement("label");
    labelContra.className = "form-modal__item";
    labelContra.textContent = "Contraseña *";
    formContainer.appendChild(labelContra);

    const inputContra = document.createElement("input");
    inputContra.className = "form-modal__item form-modal__input form-modal__contra";
    inputContra.type = "password";
    // inputContra.required = true;
    formContainer.appendChild(inputContra);

    const olvidoContra = document.createElement("p");
    olvidoContra.className = "form-modal__olvido";
    olvidoContra.textContent = "¿Has olvidado la contraseña?"
    formContainer.appendChild(olvidoContra);

    const iniSes = document.createElement("button");
    iniSes.className = "form-modal__input form-modal__inicioS";
    iniSes.type = "button";
    iniSes.textContent = "Iniciar sesión";
    formContainer.appendChild(iniSes);

    const opcionAlt = document.createElement("p");
    opcionAlt.className = "form-modal__o";
    opcionAlt.textContent = "o";
    formContainer.appendChild(opcionAlt);

    const contGoogle = document.createElement("button");
    contGoogle.className = "form-modal__input form-modal__google";
    contGoogle.type = "button";
    contGoogle.innerHTML = '<img class="form-modal__item form-modal__logo-google" src="../images/googleLogo.jpg">Continuar con Google';
    formContainer.appendChild(contGoogle);

    const registrar = document.createElement("button");
    registrar.className = "form-modal__input form-modal__item form-modal__registrar ";
    registrar.type = "button";
    registrar.textContent = "Registrarme"
    formContainer.appendChild(registrar);

    const letraPeq = document.createElement("p");
    letraPeq.className = "form-modal__letra-peq";
    letraPeq.innerHTML = 'Si continúas, aceptas los <a class="form-modal__politicas" href = "https://policy.pinterest.com/es/terms-of-service"> Términos del servicio </a > de Pinterest y confirmas que has leído nuestra <a class="form-modal__politicas" href="https://policy.pinterest.com/es/privacy-policy"> Política de privacidad. </a> <a class="form-modal__politicas" href="https://policy.pinterest.com/es/notice-at-collection"> Aviso de recopilación de datos.</a>';
    formContainer.appendChild(letraPeq);

}

