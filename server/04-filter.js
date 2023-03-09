const words=['spray','limit','elite','exuberan','Carlos Amparo','Ismael'];
const newArray=[];

const orders = [


{ 
    customerName: "Nicolas",
    tota: 60,
    delivered: true,
},
{ 
    customerName: "Zulema",
    tota: 120,
    delivered: false,
},
{ 
    customerName: "Santiago",
    tota: 180,
    delivered: true,
},
{ 
    customerName: "Valentina",
    tota: 240,
    delivered: true,
},
{ 
    customerName: "Nicolas",
    tota: 240,
    delivered: false,
}

];

// for (let index = 0; index < words.length; index++) {
//     const item = words[index];


//     if(item.length>=6){

//         newArray.push(item);
//     }
    
// }
//const ok = orders.filter(item => item.delivered && item.tota <= 120);
//console.log(words);
//console.log(ok);

const search = (consulta) =>{

    return orders.filter(item => {

        return item.customerName.includes(consulta);
    })
}

console.log(search('Nico'));