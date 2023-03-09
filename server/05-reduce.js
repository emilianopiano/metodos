
let arreglo = [1,2,3,4];

// let sum = 0;
// for (let index = 0; index < arreglo.length; index++) {
//     const element = arreglo[index];

//     sum = sum + element;
    
// }

// console.log(sum);


let suma = arreglo.reduce((a,b) => a+b, 0);

console.log(suma);