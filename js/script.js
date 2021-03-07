let form1 = document.getElementById('Form1');
let form2 = document.getElementById('Form2');
let pizzasize = document.getElementById('pizzasize')
let pizzacrust = document.getElementById('pizzacrust');
let pizzatoppings = document.getElementById('pizzatoppings');
let pizzanumber = document.getElementById('pizzanumber');
let pizzadelivery = document.getElementById('pizzadelivery');
let totalTag = document.getElementById('output');


function getSize(){
  let size = document.getElementById('pizzasize').value
  if(size==='small'){
    return(600);
  }else if(size==='medium'){
    return(800);
  }else if(size==='large'){
    return(1000)
  }
}

function getToppings(){
  let toppings = document.getElementById('pizzatoppings').value
  if(toppings==='none'){
    return(0);
  }else if(toppings==='mushrooms'){
    return(30);
  }else if(toppings==='tikkasauce'){
    return(40);
  }else if(toppings==='chilli'){
    return(50)
  }
}
function getDelivery(){
  let deliverys = document.getElementById('pizzadelivery').value
  if(deliverys==='none'){
    return(0);
  }else if(deliverys==='nairobi'){
    return(100);
  }else if(deliverys==='nakuru'){
    return(500);
  }else if(deliverys==='thika'){
    return(200)
  }else if(deliverys==='naivasha'){
    return(600);
  }else if(deliverys==='kilimani'){
    return(30);
}}
function numberOfPizza(){
 var nums= document.getElementById('pizzanumber').value;
  return(nums);
}

function total(){
  var sum =  (getSize()+getToppings()+getDelivery());
  return sum;
}

function getName(event){
  event.preventDefault()
  let pizzasize = document.getElementById('pizzasize').value
  let pizzacrust = document.getElementById('pizzacrust').value
  let pizzatoppings = document.getElementById('pizzatoppings').value
  let pizzanumber = document.getElementById('pizzanumber').value
  let summaryTag = document.getElementById('summary')
  let message = ` You have order a ${pizzasize} ${pizzacrust} ${pizzatoppings}`
  summaryTag.innerHTML = message;
  let addPizza = document.getElementById('addpizza');
  addPizza.onclick = function(){
  summaryTag.innerHTML = message;
  form1.reset
  console.log('Hello World')
}
  let totalTag = document.getElementById('output');
  let outputMessage = `Your Bill is ${total()}`
  totalTag.innerHTML = outputMessage;
}



  
 