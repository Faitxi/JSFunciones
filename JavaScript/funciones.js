//funciones
/*
- Una función es un bloque de codigo que realiza una tarea especifica, cuando se llama.
- Canda funcion de JavaScript es un objeto Funcion
 */

function saludar(){
    console.log("Hola, soy una función");
}
saludar();


/* Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

/* Cómo se declara una función?
- La palabra reservada function, que nos indica  que estamos definiendo una funcion.
- Nombrar la funcion, dependiendo de la acción a realizar. 
- Poner un par de parentesis () después del nombre. Los parentesis puede contener parametros. En este caso no tenemos ninguno.
- Seguido de un juego de llaves para cerrar nuestro bloque de código.
*Dependiendo de las instrucciones dentro del cuerpo de la función y del proposito de la misma, se determina si la función retorna un valor.
 */

//Llamamos una función y le vamos a almacenar un resultado
function suma(a,b){
    return a + b;
}
var resultado =suma(5,3); //almacenar funcion en una variable
console.log(resultado); //funcion
//otro ejemplo sería conloe.log(suma(5,3));
/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//Función que muestra un mensaje en la consola
function saludar(nombre){
    console.log("Hola, " + nombre + "!");
}
//llamamos a la función saludar a alguien
saludar("Fatima"); //imprime el saludo

/* La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */

//Hoisting
/* 
Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código JS, esto aplica tanto para variavles como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
- Se puede invocar una función antes de siquiera declarla.
*/

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable = 10;

/*Scope = Alcance, hace referencia al alcance de una variable en nuestro código de JS.
- Global: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código.
- var: no es muy recomendable, por el comportamiento de la variable y la poca adaptabilidad.
- let: es preferible e incluso es más segura de utilizar porque además de funcionar de manera global, también puede ser utilizada de manera local.
- const:se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado. */

//Variable local
function funcionConVariableLocal() {
    var mensaje = "Esta es una variable local";
    console.log(mensaje);
}
//funcionConVariableLocal();
//var mensaje ="Holis";
//console.log(mensaje);

/* En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */
 

//Variable global
var mensajeGlobal = "Esta es una variable global"

function funcionConVariableGlobal (){
    console.log (mensajeGlobal);
}
funcionConVariableGlobal(); //la estamos llamando
/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */


/* var es global cuando se declara fuera de una funcion  y local cuando esta dentro de una funcion ,const y let es  local si esta dentro del bloque de un codigo en llaves ,se puede usar como global si se declara antes del cualquier bloque*/



////////////////////////////////////////////////////
//Funciones anónimas//
////////////////////////////////////////////////////
/*
- Las funciones anónimas pueden ser declaradas sin un nombre y posteriormente asignadas a variables o pasarse como parametros en otras funciones. 
La diferencia principal de estas funciones es que se declaran sin un nombre.*/
//function (){
    //console.log("Hola Vida"); //Función anónima
//}
const saludo = function () {
    console.log("Hola Vida");
}
saludo();

/////////////////////////////////////////////////////
//Funciones flecha//
////////////////////////////////////////////////////
/* 
- Una forma concisa de definir funciones anónimas. Se le llama flecha debido a su sintaxis que utiliza (=>)
- Básicamente, se trata de reemplazar function y añadir => antes de abrir nuestras llaves
*/
const resta = (a,b) => a - b;
/* Esta funcion*/
console.log(resta(5,3));





