'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 0) return 1;
	return n * nFactorial (n-1); 
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 0 || n===1) return n;
   return nFibonacci(n-1) + nFibonacci(n-2);
}

// EJERCICIO 3
function Queue() {
   this.pila = []; 
   this.enqueue = function enqueue(e) {
      this.pila.push(e);
   };
   this.dequeue = function dequeue() {
      return this.pila.shift();
   };
   this.size = function () {
      return this.pila.length;
   };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
