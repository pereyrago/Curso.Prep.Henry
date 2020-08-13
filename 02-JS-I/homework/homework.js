// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

//1Crea una variable "string", puede colsntener lo que quieras:
const nuevaString = "sal";

// 2Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 9;

// 3Crea una variable booleana:
const nuevoBool = false;

// 4Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

//5 Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// 6Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  //7 "Return" la string provista: str
  // Tu código: 
  return str;
}

function suma(x, y) {
  // 8"x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var kkita = x + y;
  return kkita;
}

function resta(x, y) {
  // 9Resta "x" de "y" y devuelve el valor
  // Tu código:
  var Result = x - y;
  return Result;
}

function multiplica(x, y) {
  // 10Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var Result = x * y;
  return Result;
}

function divide(x, y) {
  // 11Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var Result = x / y;
  return Result;
}

function sonIguales(x, y) {
  // 12Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var oso = x == y;

  return oso; 
}

function tienenMismaLongitud(str1, str2) {
  // 13Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var long = str1.length == str2.length;
  return long;
}

function menosQueNoventa(num) {
  // 14Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var menor = num < 90;
  return menor;
}

function mayorQueCincuenta(num) {
  // 15 Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var mayor = num > 50;
  return mayor;
}

function obtenerResto(x, y) {
  // 16 Obten el resto de la división de "x" entre "y"
  // Tu código:
  var result = x % y;
  return result;
}

function esPar(num) {
  // 17Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var par = num % 2 == 0;
  return par;
}

function esImpar(num) {
  // 18Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar = num % 2 != 0 ;
  return impar;
}

function elevarAlCuadrado(num) {
  // 19Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadradito = num * num;
  return cuadradito;
}

function elevarAlCubo(num) {
  //20 Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubito = num * num * num;
  return cubito; 
}

function elevar(num, exponent) {
  // 21Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var result = Math.pow (num,exponent);
  return result;
}

function redondearNumero(num) {
  // 22Redondea "num" y devuélvelo
  // Tu código:
  var result = Math.round(num);
  return result;
}

function redondearHaciaArriba(num) {
  // 23Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  var result = Math.ceil (num);
  return result;
}

function agregarSimboloExclamacion(str) {
  // 24Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código: 
  var cambiaso = str + "!"
  return cambiaso
}

function combinarNombres(nombre, apellido) {
  //25 Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var id= nombre + " " + apellido;
  return id;
}

function obtenerSaludo(nombre) {
  // 26Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = "Hola" + " " + nombre + "!";
  return saludo; 
}

function obtenerAreaRectangulo(alto, ancho) {
  // 27Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  var area= alto * ancho;
  return area;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
