//función para cargar el Dom

document.addEventListener("DOMContentLoaded",function(){
const  nombreInput= document.getElementById("nombre");
const  telefonoInput= document.getElementById("telefono");
const  guardarbutton= document.getElementById("guardarBtn");
const recuperarButton=document.getElementById("recuperarBtn");
const  listaUl= document.getElementById("lista");

//funciones
//guardar los datos
function guardarDatos(){
    localStorage.nombre = nombreInput.value;
    localStorage.telefono = telefonoInput.value;
}

//recuperar los datos
function recuperarDatos(){
    if (localStorage.nombre != undefined && localStorage.telefono != undefined) {
    listaUl.innerHTML += "<li>" +localStorage.nombre + " - " +localStorage.
    telefono + "</li>";
} else {
    listaUl.innerHTML = "<li> no hay datos guardados</li>"
}}

//asignar los eventos  a los botones 
guardarbutton.addEventListener("click", guardarDatos);
recuperarButton.addEventListener("click", recuperarDatos);
})