var proArray=[
    {price:"100",product:"Mobile"},
    {price:"200",product:"laptop"},
    {price:"300" ,product:"Mic"},
    {price:"400",product:"Pc"}
];
var newPro = proArray.map(function(value){
    return value.price;
})
console.log(newPro);
var newPro1=proArray.map(value=>value.price);
console.log(newPro1);
//
var filterEx=proArray.filter(function(value){


if(value.price<300)
{
    return true;
}
})
console.log(filterEx);
//
const arrowValue= proArray.filter(value => value.price>300);
console.log(arrowValue); 
//
const sortProduct=proArray.sort((a,b)=>(a.product>b.product ? 1:-1));
console.log(sortProduct);