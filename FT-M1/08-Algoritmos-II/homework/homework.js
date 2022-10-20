'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // Si no se puede ordenar lo devuelvo
  if (array.length <= 1) return array;
  // Defino variables
  var left = [], right = [], aux = [], 
  // Saco el ultimo y lo guardo como pivote
    pivot = array.pop();
  // Lo recorro  
  array.forEach(e => {
    // Si es menor o igual lo agrego a la izquierda
    if (e <= pivot) left.push(e);
    // Sino a la derecha
    else right.push(e);  
  });
  // Recorrer ambos lados y unir el resultado
  return aux.concat(quickSort(left),pivot,quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // Si no se puede ordenar lo devuelvo
  if (array.length <= 1) return array;
  // Obtenemos la mitad
  var middle = parseInt(array.length /  2)
  // Sacamos la mitad izquierda
  var left = mergeSort(array.slice(0, middle));
  // Sacamos el resto (derecha)
  var right = mergeSort(array.slice(middle, array.length) );
  // Devolver arreglo unido y ordenado
  return merge(left,right);
}

/**
 * Ordenar y unir 
 * @param {*} left arreglo izquierdo
 * @param {*} right arreglo derecho
 * @returns arreglo ordenado 
 */
  function merge (left, right) {
  var aux = [];
  // Mientras tengan contenido
  while (left.length > 0 && right.length > 0) 
  // Si es menor lo saco a la izquierda sino a la derecha y lo agrego
    aux.push(left[0] <= right[0] ? left.shift() : right.shift())
  // Uno los arreglos
  return aux.concat(left, right);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
