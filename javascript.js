const bakery = [
    {name:'choco-muffin', price: 50, type:'sugary', rating:3},
    {name:'cup-cake',      price: 90, type:'gluten-free', rating:2},
    {name:'dessert-special', price: 150, type:'sugar-free', rating:1}   
];
// ---------------------------------filter-------

const expensive = bakery.filter(function expense(item) {
    return item.price > 50;
})
console.log(expensive); 


// ----------------------------------find-------

const find = bakery.find(function finditem(item) {
    return item.rating = 2;
    
})
console.log(find);


// ----------------------------------reduce----

const total = bakery.reduce(function amount(item,rate) {
console.log(`amount is ${item}`);
console.log(`total amount now becomes ${rate.price}`)
    item += rate.price
    return item;
}, 0);
console.log(total);


// -------------------------------forEach------
function Eachitem(item) {
    console.log(item.name.toUpperCase());
    
}
bakery.forEach(Eachitem);

// -----------------------------------Map----------

function mapitem(item) {
    console.log(item);
    return ;
};
bakery.map(mapitem);



