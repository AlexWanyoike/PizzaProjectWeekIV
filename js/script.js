let form1 = document.getElementById('Form1');
let form2 = document.getElementById('Form2');
let pizzasize = document.getElementById('pizzasize')
let pizzacrust = document.getElementById('pizzacrust');
let pizzatoppings = document.getElementById('pizzatoppings');
let pizzanumber = document.getElementById('pizzanumber');
let totalTag = document.getElementById('output');
let addPizza = document.getElementById('addpizza');

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

function total(){
  var sum = (getSize()+getToppings());
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
  let totalTag = document.getElementById('output');
  let outputMessage = `Your Bill is ${total()}`
  totalTag.innerHTML = outputMessage;
}

addPizza.onclick = function(){
  sumaryTag.innerHTML = message;
  form1.reset
}


  
 