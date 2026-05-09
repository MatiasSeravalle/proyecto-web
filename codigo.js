function enviar() {
    window.location.href="form.html"
}

function validar() {
    var model=document.getElementById("modelo").value;
    var pay=document.getElementById("pago").value;

    if(model == 0 && pay == 0) {
        alert("Elija 2 opciones");
    }
    if(model == 1 && pay == 1) {
        document.getElementById("result").textContent="Su cotizacion es de $150.000"
    }
    if(model == 1 && pay == 2) {
        document.getElementById("result").textContent="Su cotizacion es de $150.000"
    }
    if(model == 1 && pay == 3) {
        document.getElementById("result").textContent="Su cotizacion es de $200.000"
    }
    if(model == 2 && pay == 1) {
        document.getElementById("result").textContent="Su cotizacion es de $100.000"
    }
    if(model == 1 && pay == 2) {
        document.getElementById("result").textContent="Su cotizacion es de $110.000"
    }
    if(model == 1 && pay == 3) {
        document.getElementById("result").textContent="Su cotizacion es de $150.000"
    }
    if(model == 3 && pay == 1) {
        document.getElementById("result").textContent="Su cotizacion es de $70.000"
    }
    if(model == 1 && pay == 2) {
        document.getElementById("result").textContent="Su cotizacion es de $75.000"
    }
    if(model == 1 && pay == 3) {
        document.getElementById("result").textContent="Su cotizacion es de $110.000"
    }
}