let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let pizzasize = document.getElementById('pizzasize')
let pizzacrust = document.getElementById('pizzacrust');
let pizzatoppings = document.getElementById('pizzatoppings');
let pizzanumber = document.getElementById('pizzanumber');
let pizzadelivery = document.getElementById('pizzadelivery');
let deliverydetails = document.getElementById('deliverydetails')
let namedelivery = document.getElementById('namedelivery');
let districtdelivery = document.getElementById('districtdelivery');
let areadelivery = document.getElementById('areadelivery');
let housedelivery = document.getElementById('housedelivery');
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
  }
}
function numberpizzas(){
 var nums = parseInt(document.getElementById('pizzanumber').value);
  alert(numberpizzas());
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
  let pizzanumber = parseInt(document.getElementById('pizzanumber').value)
  let namedelivery = document.getElementById('namedelivery').value
  let districtdelivery = document.getElementById('districtdelivery').value
  let areadelivery = document.getElementById('areadelivery').value
  let housedelivery = document.getElementById('housedelivery').value
  let addpizza = document.getElementById('addpizza');
  let summaryTag = document.getElementById('summary')
  let deliverydetailsTag = document.getElementById('deliverydetails')
  let information = `To: ${namedelivery}  District: ${districtdelivery} ${areadelivery} House: ${housedelivery} Charges: ${getDelivery()} `
  let message = ` You order is ${pizzanumber} ${pizzasize} ${pizzacrust} with ${pizzatoppings} toppings `
  summaryTag.innerHTML = message;
  deliverydetailsTag.innerHTML = information;
  addpizza.onclick = function(){
    summaryTag.innerHTML = message;
    deliverydetailsTag.innerHTML = information;
  }
  let totalTag = document.getElementById('output');
  let outputMessage = `Your Bill is ${total()}`
  totalTag.innerHTML = outputMessage;
}




  
 