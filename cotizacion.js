function validar() {
    var model=document.getElementById("modelo").value;
    var pay=document.getElementById("pago").value;

    if(model == 0 && pay == 0) {
        alert("Elija 2 opciones");
    }
    if(model == 0 && pay == 1) {
        alert("Elija 2 opciones");
    }
    if(model == 0 && pay == 2) {
        alert("Elija 2 opciones");
    }
    if(model == 0 && pay == 3) {
        alert("Elija 2 opciones");
    }
    if(model == 1 && pay == 0) {
        alert("Elija 2 opciones");
    }
    if(model == 2 && pay == 0) {
        alert("Elija 2 opciones");
    }
    if(model == 3 && pay == 0) {
        alert("Elija 2 opciones");
    }

    if(model == 1 && pay == 1) {
        document.getElementById("result").textContent="Su cotizacion es de $150.000"
    }
    if(model == 1 && pay == 2) {
        document.getElementById("result").textContent="Su cotizacion es de $220.000"
    }
    if(model == 1 && pay == 3) {
        document.getElementById("result").textContent="Su cotizacion es de $270.000"
    }
    if(model == 2 && pay == 1) {
        document.getElementById("result").textContent="Su cotizacion es de $100.000"
    }
    if(model == 2 && pay == 2) {
        document.getElementById("result").textContent="Su cotizacion es de $150.000"
    }
    if(model == 2 && pay == 3) {
        document.getElementById("result").textContent="Su cotizacion es de $200.000"
    }
    if(model == 3 && pay == 1) {
        document.getElementById("result").textContent="Su cotizacion es de $70.000"
    }
    if(model == 3 && pay == 2) {
        document.getElementById("result").textContent="Su cotizacion es de $120.000"
    }
    if(model == 3 && pay == 3) {
        document.getElementById("result").textContent="Su cotizacion es de $170.000"
    }

    document.querySelector("#result").style.display="block"
}

function enviar() {
    window.location.href="form.html"
}

function catalogo() {
    window.location.href="index.html#catalogo"
}