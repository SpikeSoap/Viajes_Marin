import { crearModal } from "./modal.js";

/* Constantes */
const btnIniciar = document.querySelector(".contenido-index__boton");
const btnMenu = document.querySelector(".boton-menu");
const logo = document.querySelector(".encabezado__logo");
const destMenu = document.querySelectorAll(".menu__sub");

//
// Descubrir por qué va mal la ruta: el navegador se inventa una carpeta html que no tengo programado por ninguna parte
//

// for (let i = 0; i < destMenu.length; i++) {

//     destMenu[i].addEventListener('click', () => {
//         window.location.href = "../pages/borrar.html";
//     });
// };

// destMenu.forEach(pendiente => {
//     pendiente.addEventListener('click', () => {
//         window.location.href = "../pages/borrar.html";
//     });
// })

if (btnIniciar) {
    btnIniciar.addEventListener('click', () => {

        window.location.href = "../pages/planificacion.html";
    });
}

logo.addEventListener('click', () => {
    location.href = "../index.html";
});

btnMenu.addEventListener('click', () => {
    crearModal();

    //Funcionalidades
    btnClose();
    btnLogin();
    btnGoogle();
    btnRegistrar();

});


function btnClose() {
    let btnClose = document.querySelector(".modal-encabezado__close");
    let modalCont = document.querySelector(".container__modal");

    if (btnClose) {
        btnClose.addEventListener('click', () => {
            // modalCont.classList.remove('show');
            modalCont.remove();
        });
    }
}


function btnLogin() {
    let correoUsu = document.querySelector(".form-modal__correo");
    let contraUsu = document.querySelector(".form-modal__contra");
    let btnIniSes = document.querySelector(".form-modal__inicioS");
    let modalCont = document.querySelector(".container__modal");

    btnIniSes.addEventListener('click', () => {
        let correoAct = correoUsu.value;
        let contraAct = contraUsu.value;

        if (correoAct && contraUsu) {
                let correo = sessionStorage.getItem('Correo');
                let contra = sessionStorage.getItem('Contra');

                if ((correo != null) && (contra != null)) {
                    let nombre = sessionStorage.getItem('Nombre');

                    if ((correo == correoAct) && (contra == contraAct)) {
                        btnMenu.innerHTML = nombre;
                        btnMenu.classList.add('boton__usuario');

                        sessionStorage.setItem('Usuario', nombre);

                        modalCont.remove();
                    } else {
                        alert("El usuario o la contraseña no coinciden");
                    }
                } else {
                    alert("No hay ningún usuario registrado");
                }
        } else {
            alert("Llene por favor, los campos");
        }
    });
}

function btnGoogle() {
    let btnGoogle = document.querySelector(".form-modal__google");
    if (btnGoogle) {
        btnGoogle.addEventListener('click', () => {
            location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D694505692171-31closf3bcmlt59aeulg2j81ej68j6hk.apps.googleusercontent.com%26auto_select%3Dtrue%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Duse%26as%3Dfhl7Z85OZcQlkg3jSRZYiQ%26channel_id%3D25e5b337e5fb197bbd402b2e248b60f74f359a80efc3383b8cdb59ae71749d02%26origin%3Dhttps%3A%2F%2Fwww.pinterest.es&faa=1&ifkv=AVQVeyyY2x5ZTLb5dPoqjbaDEkBsdY9S3A9FGbzLmTGSAvPnANbORmimTO0vUDpjYa-1pAJpF8sgOQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1962621882%3A1697814215438098&theme=glif";
        });
    }
}

function btnRegistrar() {
    let btnRegistrar = document.querySelector(".form-modal__registrar");

    if (btnRegistrar) {
        btnRegistrar.addEventListener('click', () => {
            location.href = "../pages/registrar.html";
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {

    let usuario = sessionStorage.getItem('Usuario');
    if (usuario != null) {
        btnMenu.innerHTML = usuario;
        btnMenu.classList.add('boton__usuario');
    }
});