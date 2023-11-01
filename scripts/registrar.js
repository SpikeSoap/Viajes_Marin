
//Constantes
const nombre = document.querySelector(".registrar__id-nombre");
const apellidos = document.querySelector(".registrar__id-apellidos");
const correo = document.querySelector(".registrar__id-correo");
const correo2 = document.querySelector(".registrar__id-correo2");
const contra = document.querySelector(".registrar__id-contra");
const contra2 = document.querySelector(".registrar__id-contra2");
const btnRegis = document.querySelector(".registrar__btn");



btnRegis.addEventListener("click", () => {

    let nombreAct = nombre.value;
    let apellidosAct = apellidos.value;
    let correoAct = correo.value;
    let correo2Act = correo2.value;
    let contraAct = contra.value;
    let contra2Act = contra2.value;


    if ((nombreAct.trim().length != "") && (apellidosAct.trim().length != "") && (correoAct.trim().length != "") && (correo2Act.trim().length != "") && (contraAct.trim().length != "") && (contra2Act.trim().length != "")) {

        if ((correoAct == correo2Act) && (contraAct == contra2Act)) {
            sessionStorage.setItem('Nombre', nombreAct);
            sessionStorage.setItem('Apellidos', apellidosAct);
            sessionStorage.setItem('Correo', correoAct);
            sessionStorage.setItem('Contra', contraAct);

            sessionStorage.setItem('Usuario', nombreAct);

            alert("Se ha registrado con éxito");
            window.location.href = ("../index.html");
        } else {
            alert("El usuario o contraseña introducidos no coinciden, revíselo");
        }
    } else {
        alert("No has rellenado todos los campos correctamente");
    }
});

