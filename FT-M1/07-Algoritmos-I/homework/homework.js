'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var array = [1], 
    div = 2;
  // si es mayr a 1
  while (num > 1) {
    // Si es decimal, incrementar divisor
    if (num % div !== 0)  div++;
    // Sino agregarlo al arreglo
    else {
      array.push(div);
      num = num /div;
    }
  }  
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = array.length - 1; i > 0; i--) {    
    for (let j = 0; j < i; j++) {
      // Si es mas grande que el siguiente , intercambiar
      if(array[j] > array[j + 1] ) swap(array, j, j + 1);      
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    var valuToInsert = array[i];
    var j = i - 1;
    // Busca el mayor a la izquierda
    for (j; j >=0; j--) {
      // Si es mas grande, lo muevo a la derecha
      if(array[j] > valuToInsert) array[j+1] = array[j];  
      else break;   
    }
    array[j+1] = valuToInsert;
  }
  return array;
}

// intercambiar
function swap(array, idx1, idx2) {
  var aux = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = aux;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Recorrer
  for (let i = 0; i < array.length; i++) {
    var min = i;
    // Comparar con el resto de los valores
    for (let j = i+1; j < array.length; j++) {
      // Si es menor, guardo indice como nuevo mínimo
      if (array[j] < array[min]) min = j;
    }
    // Mínimo diferente, intercambiar
    if (min !== i) swap(array, i, min)
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
