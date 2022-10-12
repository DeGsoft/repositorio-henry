'use strict';

function BinarioADecimal(num) {
   // return parseInt(num, 2);

   // return num.split('').reverse().reduce(function(acc, v, i){
   //    return (v === '1') ? acc + 2**i) : acc;
   //  }, 0); 
   
   let digits = num.split('');   
   let decimal = 0;
   for (let i = 0; i < digits.length; i++) {
      let position = digits.length - 1 - i;
      decimal += digits[i] * 2 ** position;
   }   
  return decimal; 
}

function DecimalABinario(num) {
   //return num.toString(2); 
   
   let binario = '';
    num = parseInt(num);
    while (num > 0) {
        let resto = num % 2;
        num = Math.floor(num / 2);
        binario = resto + binario;
    }
    return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
