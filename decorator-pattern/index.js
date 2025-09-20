class Pizza {
    getDescription() {
        return "Basic Pizza";
    }
    
    getCost() {
        return 10.00;
    }
}

class PizzaDecorator {
    constructor(pizza) {
        this.pizza = pizza;
    }
    
    getDescription() {
        return this.pizza.getDescription();
    }
    
    getCost() {
        return this.pizza.getCost();
    }
}

class CheeseTopping extends PizzaDecorator {
    getDescription() {
        return this.pizza.getDescription() + ", Cheese";
    }
    
    getCost() {
        return this.pizza.getCost() + 2.50;
    }
}

class PepperoniTopping extends PizzaDecorator {
    getDescription() {
        return this.pizza.getDescription() + ", Pepperoni";
    }
    
    getCost() {
        return this.pizza.getCost() + 3.00;
    }
}

let pizza = new Pizza();
console.log(`${pizza.getDescription()} - $${pizza.getCost()}`);

pizza = new CheeseTopping(pizza);
console.log(`${pizza.getDescription()} - $${pizza.getCost()}`);

pizza = new PepperoniTopping(pizza);
console.log(`${pizza.getDescription()} - $${pizza.getCost()}`);
