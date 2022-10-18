'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el 
    caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad:
   el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo 
   cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al 
   ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por 
  parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
/**
 * Lista enlazada
 */
function LinkedList() {
  this.head = null;
}
/**
 * Metodo para agregar
 * @param {*} value 
 * @returns nodo
 */
LinkedList.prototype.add = function (value) {
  var node = new Node(value);
  var current = this.head;
  // Si está vacia, lo guardo en la cabeza
  if (!current) {
      this.head = node;
      return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
  while (current.next) current = current.next; 
  // Lo agrego
  current.next = node;
  return node;
};
/**
 * Metodo de eliminación del ultimo
 * @returns eliminado
 */
LinkedList.prototype.remove = function() {
  // Empezamos en la cabeza
  var current = this.head; 
  // Si esta vacio
  if (!current) return null;
  // Si es el unico, remover cabeza
  if (!current.next) {
    this.head = null;
    return current.value;
  }
  // Encontrar el ultimo  
  while((current.next).next) current = current.next; 
  // Guardarlo
  var removedCurrent = current.next;
  // Eliminarlo
  current.next = null;
  // Devolverlo
  return removedCurrent.value;
};
/**
 * Metodo para buscar
 * @param {*} value 
 * @returns valor o verdadero
 */
LinkedList.prototype.search = function(value){
  // Empezamos en la cabeza
  var current = this.head; 
  // Si esta vacia
  if (!current) return null; 
  // Buscamos
  while(current) {
    // Si es función
    if (typeof value === "function")
      if (value(current.value)) return current.value;    
    // Si es valor
    if(current.value === value)
      return current.value;
    // Si no lo encontramos, seguimos
    current = current.next;
  }
  return null;
};

function Node(value) {
  this.value = value;
  this.next = null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

/**
 * Tabla de hash
 */
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}
/**
 * Metodo de generación de hash
 * @param {*} string 
 * @returns hash
 */
HashTable.prototype.hash = function (value) {
  // Convierte la cadena a arreglo
  var array = value.split('');
  // Acumula la suma de códigos de caracter
  // y obtiene el resto
  return array.reduce(
    function (acc, cur, idx) { 
      return acc + value.charCodeAt(idx) 
    },0) % this.numBuckets;
};
/**
 * Metodo de guardado
 * @param {*} key clave
 * @param {*} value valor
 */
HashTable.prototype.set = function (key, value) {
  // Si la clave no es cadena
  if (typeof key !== "string") 
    throw new TypeError("Keys must be strings");
  // Obtengo el indice con el hash
  var idx = this.hash(key);
  // Si no existe, lo creo
  if (!this.buckets[idx]) 
    this.buckets[idx] = {};
  // Lo agrego  
  this.buckets[idx][key] = value;
};
/**
 * Metodo de lectura
 * @param {*} key clave
 * @returns cadena
 */
HashTable.prototype.get = function (key) {
  // Obtengo el indice con el hash
  var idx = this.hash(key);
  // Devuelve el valor encontrado
  return this.buckets[idx][key];
};
/**
 * Metodo de llave unica
 * @param {*} key 
 * @returns verdadero
 */
HashTable.prototype.hasKey = function (key) {
  //Si existe devuelve verdadero
  return (this.get(key) !== undefined);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
