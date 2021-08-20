var pizza = {
    crustType: ["deep dish", "hand tossed"],
    sauceType: ["traditional", "marinara"],
    cheeses: ["mozzarella", "feta"],
    toppings: ["pepperoni", "sausage", "onions", "mushrooms", "olives"],
}

function pizzaFactory(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType; 
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaFactory("deepdish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaFactory("hand tossed","marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "oniones"]);
console.log(p2);

var p3 = pizzaFactory("hand tossed", "traditional", "mozzarella", "pepperoni")
console.log(p3);

var p4 = pizzaFactory("deep dish", "marinara", "feta", ["onions", "mushrooms"])
console.log(p4);