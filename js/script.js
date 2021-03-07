const form1 = document.getElementById('Form1');
const form2 = document.getElementById('Form2');
const pizzasize = document.getElementById('pizzasize');
const pizzacrust = document.getElementById('pizzacrust');
const pizzatoppings = document.getElementById('form');
let pizzanumber = document.getElementById('pizzanumber');

let Next1 = document.getElementById("Next1");
let Back2 = document.getElementById("Back2");
let addpizza = document.getElementById('addpizza');
  
 function checkInputs() {
   const pizzasizeValue = pizzasize.value.trim();
   const pizzacrustValue = pizzacrust.value.trim();
   const pizzatoppingsValue = pizzatoppings.value.trim();
   const pizzanumber = pizzasize.number.trim();
 }
  
  
  
  
  
  
  function pizzas(name,amount){
    this.name=name;
    this.amount=amount;
  }

  let pizza1= new pizzas("periperilarge",1000);
  let pizza2= new pizzas("periperimedium",800);
  let pizza3= new pizzas("periperismall",600);

  