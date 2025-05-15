function compara() {
    var a = 3;
    var b = 3;
    if (a == b) {
        alert("A y B son iguales");
    } else {
        alert("A y b son diferentes");
    }
}
function resta(x,y) {
    var rest =x -y;
    document.writeln("<h2> La resta es:" + rest + "<h2>");
}
function suma(x,y) {
    var sum= x+y;
    document.getElementById("sumar").innerHTML="La suma es :" + sum;
}
function escribir() {
    valor= document.getElementById("entrada").value;
    document.getElementById("contenido").innerHTML = valor;
}