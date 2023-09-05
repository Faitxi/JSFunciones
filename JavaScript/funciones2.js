// Funciones
//Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log("Exprimiendo " + cantidad + " Limones.");
    let jugoExtraido = cantidad *10; //considerando obtener 10 ml de jugo  por cada limón
    console.log("Se obtuvo " + jugoExtraido + " ml de jugo de limon.");
    return jugoExtraido; //return
}

//Función para mezclar el jugo de limon con agua y azucar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log ("Mezclando " + cantidadDeJugo + " ml de jugo de limon con " + cantidadDeAgua + " ml de agua y " + cantidadDeAzucar + " Gramos de azucar");
}

//Función para servir limonada
function servirLimonada(){
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Función principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon){
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); //cantidadesficticias de jugo de limon, de agua y de azucar
    servirLimonada();
}

//Llamar a nuestra función principal para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(5); //llamado al programa