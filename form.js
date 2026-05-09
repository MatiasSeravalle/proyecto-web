function validar() {
    var date=document.getElementById("date").value;
    var result=document.getElementById("result");

    if(date==="") {
        alert("Por favor ingresa tu edad");
        result.textContent("");
        return;
    }

    var edad=parseInt(date);

    if(edad>=18) {
        alert("Usuario Registrado");
        result.textContent="";
        window.location.href=("./index.html")
    }else {
        result.textContent="Acceso denegado, tienes que ser mayor de edad";
    }
}