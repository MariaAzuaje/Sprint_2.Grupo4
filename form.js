//"use strict";

function checkNombre(valor) {
    let nombre = valor //document.getElementById("nombre").value;
    let regNum = /[0-9]+/;
    let regLong = /[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\'\:\.\,\;-]{4,30}/;
    let valLong = regLong.test(nombre);
    let valNum = regNum.test(nombre);
    if (valNum === true){
        //alert("No se puede ingresar numeros");
        console.log(valNum)
        return false;
    }
    else if (nombre === ""){
        //alert("El campo nombre no puede estar vacio");
        console.log(valLong)
        return false;
    }
    else if (valLong === false){
        //alert("El minimo de caracteres en el nombre debe ser 4");
        return false;
    }
    else {
        return true;
    }
}


function checkApellido(valor) {
    let apellido = valor //document.getElementById("apellido").value;
    let regNum = /[0-9]+/
    let regLong = /[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\'\:\.\,\;-]{4,30}/
    let valLong = regLong.test(apellido);
    let valNum = regNum.test(apellido);
    if (valNum === true){
        //alert("No se puede ingresar numeros");
        return false;
    }
    else if (apellido === ""){
        //alert("El campo apellido no puede estar vacio");
        return false
    }
    else if (valLong === false){
        //alert("El minimo de caracteres en apellido debe ser 4");
        return false;
    }
    else {
        return true
    }
}


function checkTelefono(valor) {
    let tel = valor //document.getElementById('telefono').value;
    let conftel = /^[0-9]{7}$/
    let valftel =conftel.test(tel)
    if (valftel===true){
        return true;
    }
    else{
        //alert("El campo de telefono debe de tener 7 caracteres")
        return false; 
    }
}


function checkCorreo(valor) {
    let correo = valor //document.getElementById("correo").value;
    let regCorreo = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,4}$/i
    let valCorreo = regCorreo.test(correo);
    if (correo === ""){
        //alert("El campo correo no puede estar vacio");
        return false;
    }
    else if (valCorreo === false){
        //alert("Error, ingresar correo valido");
        return false;
    }
    else{
        return true;
    }
}


function checkContrasena(valor) {
    let contra = valor //document.getElementById("contrasena").value;
    let regMinus = /[a-z]+/;
    let regMayus = /[A-Z]+/;
    let regNum = /[0-9]+/;
    let regLong = /[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s\'\:\.\,\;-]{8,}/;
    let valMinus = regMinus.test(contra);
    let valMayus = regMayus.test(contra);
    let valNum = regNum.test(contra);
    let valLong = regLong.test(contra);
    if (valLong === false){
        //alert("Contraseña debe contener 8 caracteres como minimo");
        return false;
    }
    else if (contra === ""){
        //alert("Este campo no puede estar vacio");
        return false;
    }
    else if (valMinus === false){
        //alert("Contraseña debe contener una letra minuscula");
        return false;
    }
    else if (valMayus === false){
        //alert("Contraseña debe contener una letra Mayuscula");
        return false;
    }
    else if (valNum === false){
        //alert("Contraseña debe contener un numero");
        return false;
    }
    else {
        return true;
    }
}
module.exports = {
    checkTelefono,
    checkContrasena,
    checkNombre,
    checkCorreo,
    checkApellido
}