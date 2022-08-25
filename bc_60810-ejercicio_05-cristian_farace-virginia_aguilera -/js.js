// EJERCICIO 1
let emoji_ejerc1 = ["😺","😸","😹"]
var cantidadDeGatos =10;
var text= "😺"
for (i=1; i<= cantidadDeGatos;i++){
    
    if(text == "😺" ){
        text ="😸";}
    else if(text == "😸"  ){
        text ="😹";}
    else if (text =="😹" ){
        text ="😺";
    }
    console.log("Gato #" + i + text)
    }
console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");

// EJERCICIO 2
// Explicacion : Usamos la funcion repeat() para indicar cuantas veces se va a repetir una cadena de string, en este caso son los pasos que dara el Gato.
let emoji_ejerc2 = "🐈"
let pasos = "🐾"
let cantidad_de_pasos_que_se_quieran_ingresar = 10
let cantidad_de_veces_que_se_repite_el_gato = 4
let pasos_repetidos = pasos.repeat(cantidad_de_pasos_que_se_quieran_ingresar)

for (let index = 0; index < cantidad_de_veces_que_se_repite_el_gato; index++) {
    console.log("Gato #" + [index + 1] + " " + emoji_ejerc2 + pasos_repetidos);
}



console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
// EJERCICIO 3 
// Explicacion : Si el index del bucle for por cada vuelta que se ejecuta, es par (multiplo de 2) hace tal cosa y si es impar, hace tal otra
let emoji_ejer3 = "🐈"
let emoji_ejer3A = "🐈‍⬛"
let pasos_ejer3 = "🐾"
let cantidad_de_pasos_que_se_quieran_ingresar_ejer3 = 20
let cantidad_de_veces_que_se_repite_el_gato_ejer3 = 3
let pasos_repetidos_ejer3 = pasos.repeat(cantidad_de_pasos_que_se_quieran_ingresar_ejer3)

for (let index = 0; index < cantidad_de_veces_que_se_repite_el_gato_ejer3; index++) {
    if (index % 2 ) {
        console.log("Gato #" + [index + 1] + " " + emoji_ejer3A + pasos_repetidos_ejer3);
    }
    else {
        console.log("Gato #" + [index + 1] + " " + emoji_ejer3 +  pasos_repetidos_ejer3);
    }

}
