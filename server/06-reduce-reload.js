const items = [1,2,3,3,4];

const rta = items.reduce((obj, item) => {

   console.log(obj);
   console.log('articulo ' + item);

 if(obj[item]){

    obj[item] += 1;
 }
 else{

    obj[item] = 5;
 }
 return obj;
}

,{});


