class Meal {
  constructor(mainCourse, side, drink) {
    this.mainCourse = mainCourse
    this.side = side
    this.drink = drink
  }
}

class MealBuilder {
  constructor() {
    this.meal = new Meal()
  }

  setMainCourse(mainCourse) {
    this.meal.mainCourse = mainCourse
    return this
  }

  setSide(side) {
    this.meal.side = side
    return this
  }

  setDrink(drink) {
    this.meal.drink = drink
    return this
  }

  build() {
    return this.meal
  }
}

// class BurgerMealBuilder extends MealBuilder {
//   constructor() {
//     super()
//     this.setMainCourse('burger');
//     this.setSide('fries');
//     this.setDrink('coke');
//   }
// }

class BurgerMealBuilder {
  constructor() {
    this.meal = new MealBuilder().setMainCourse('burger').setSide('fries').setDrink('coke').build();
  }
}

class PizzaMealBuilder {
  constructor() {
    new MealBuilder().setMainCourse('pizza').build();
  }
}

class MealDirector {
  constructor(builder) {
    this.builder = builder
  }
  
  constructMeal() {
    return this.builder;
  }
}

const burgerMealBuilder = new BurgerMealBuilder();
const pizzaMealBuilder = new PizzaMealBuilder();

const mealDirector = new MealDirector(burgerMealBuilder);
const burgerMeal = mealDirector.constructMeal();

mealDirector.builder = pizzaMealBuilder;
const pizzaMeal = mealDirector.constructMeal();

console.log(burgerMeal);
console.log(pizzaMeal);

// Second variant

// class MealDirector {
//   constructor(builder) {
//     this.builder = builder
//   }
  
//   constructMeal() {
//     return this.builder;
//   }
// }

// const mealDirector = new MealDirector(new MealBuilder().setMainCourse('pita').setSide('fries').setDrink('coke').build());
// const mealDirector = new MealDirector(new MealBuilder().setMainCourse('pita').setSide('fries').setDrink('coke').build());
// const mealDirector = new MealDirector(new MealBuilder().setMainCourse('pita').setSide('fries').setDrink('coke').build());

