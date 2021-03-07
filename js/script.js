const form1 = document.getElementById('Form1');
const form2 = document.getElementById('Form2');
const pizzasize = document.getElementById('pizzasize');
const pizzacrust = document.getElementById('pizzacrust');
const pizzatoppings = document.getElementById('form');
const pizzanumber = document.getElementById('pizzanumber');

let Next1 = document.getElementById("Next1");
let Back2 = document.getElementById("Back2");

Next1.onclick=function(){
  Form1.style.left="-450px";
  Form2.style.left="40px";
}
  
 form.addEventListener('checkout'),(e)=>{
   e.preventDefault();

   checkInputs();

 };
  
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

  