var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

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