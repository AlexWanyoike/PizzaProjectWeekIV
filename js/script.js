const form1 = document.getElementById('Form1');
const pizzasize = document.getElementById('pizzasize');
const pizzacrust = document.getElementById('pizzacrust');
const pizzatoppings = document.getElementById('form');
const pizzanumber = document.getElementById('pizzanumber');

  
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

  <div class="form-control">
    <label for="">Delivery services</label>
        <div>
        <button type="button" class="btn btn-primary btn-sm">Yes</button>
        <button type="button" class="btn btn-secondary btn-sm">Checkout</button>
        </div>  
    </div>