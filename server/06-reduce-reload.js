const items = [1,2,3,3,4];

const rta = items.reduce((obj, item) => {

   console.log(obj);
   console.log('articulo ' + item);

 if(obj[item]){

    obj[item] += 1;
 }
 else{

    obj[item] = 1;
 }
 return obj;
}

,{});

const data = [
{
   name: "Nicolas",
   level: "low",
},
{
   name: "Andrea",
   level: "medium",
},
{
   name: "Zulema",
   level: "hight",
},
{
   name: "Santiago",
   level: "low",
},
{
   name: "Valentina",
   level: "medium",
},
{
   name: "Lucia",
   level: "hight",
}
]; 



let objeto={};
function contador(array){

   //let objeto={};
for (let index = 0; index < array.length; index++) {
   const element = array[index];

   if(objeto[element]){
      objeto[element] += 1;
   }

   else{
      objeto[element] = 1;
   }

   /*objeto.push(element);
   objeto[element] = 1;
   console.log(objeto.element);*/
}

return objeto;
}



let niveles = data

.map(item => item.level);

console.log(niveles);

console.log(contador(niveles));

objeto["ok"] = 5; 

console.log(objeto);

for (let propiedad in data) {

   console.log( propiedad + " hola.." );

   

}

function calculateSum(numberArray) {
   let sum = 0;
   for (let num of numberArray) {
       sum += num;
   }
   return sum;
}

let shapes = ["hola","perro ","ok "];

console.log(calculateSum([5,6,7,5,9]));
console.log([5,6,7,5,9].reduce((a,b) => a+b,0));

function setLastValue(array, ___) {
   array[array.length-1] = 'hexagon';
   return array;
 };
 console.log(setLastValue(shapes));
 for (let item of shapes) {
   console.log(item);
 }

 let arr = [];
arr.foo = "hola";
arr.ok = "cero muertos"

console.log(arr);


for (let i in shapes) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of shapes) {
   console.log(i + " aparte :"); // logs "3", "5", "7"
}

let obj={};
let string="gather";
for (let i = 0; i < string.length; i++) {
   let letter = string[i];
   obj[letter] = i;
 }
 for (let property in obj) {
   console.log(property + ': ' + obj[property]);
 }




