// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

let breakfast = new Breakfast("Cereal w/Milk", "Water")
console.log(breakfast)

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

let lunch = new Lunch("No salad", "Chicken Soup", "Water")
console.log(lunch)

class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert
  }
}

let dinner = new Dinner("No salad", "Fish Soup", "test", "no dessert")
console.log(dinner)