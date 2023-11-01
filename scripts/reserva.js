window.addEventListener('load', () => {
    
    
    /*Recojo los valores de la sesión*/
    let destino = sessionStorage.getItem('Destino');
    let fechaD = sessionStorage.getItem('Fecha desde');
    let fechaH = sessionStorage.getItem('Fecha hasta');
    let adult = sessionStorage.getItem('Adultos');
    let kid = sessionStorage.getItem('Niños');

    /*Opero con las fechas*/
    let d1 = new Date(fechaD);
    let d2 = new Date(fechaH);
    let d3 = new Date(d2 - d1);

    console.log(d1);
    console.log(d2);
    let d4 = Math.floor(d3 / (1000 * 60 * 60 * 24));
    console.log(d4);

    /*Valores para la factura*/
    let subtotal = 25.31 * parseInt(adult) * d4;
    let impuesto = 0.21 * parseInt(subtotal);
    /*Controlo la cantidad de dedimales*/
    let iva = Number(parseInt(impuesto)).toFixed(2);
    let total = parseInt(subtotal) + parseInt(impuesto);

    console.log("Subtotal: " + subtotal);
    console.log("Impuestos: " + impuesto);
    console.log("IVA: " + iva);
    console.log("Total" + total)


    /*Los introduzco cada uno en su sitio*/
    document.querySelector('.reserva-derecha__destino').innerHTML = destino;
    document.querySelector('.reserva-derecha__fechaD').innerHTML = fechaD;
    document.querySelector('.reserva-derecha__fechaH').innerHTML = fechaH;
    document.querySelector('.reserva-derecha__adult').innerHTML = adult;
    document.querySelector('.reserva-derecha__kid').innerHTML = kid;

    /*factura*/
    document.querySelector('.reserva-derecha__subtotal').innerHTML = subtotal + "€";
    document.querySelector('.reserva-derecha__iva').innerHTML = iva + "€";
    document.querySelector('.reserva-derecha__total').innerHTML = total + "€";
})