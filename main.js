const bill = document.querySelector(".dolar");
const people = document.querySelector(".hipek");
const tip = document.querySelector(".input-service");
const button = document.querySelector(".przelicz")
const tipAmount = document.querySelector(".tip-amount")
const totalAmount = document.querySelector(".total-amount")
const personAmount = document.querySelector(".person-amount")
const alert = document.querySelector(".alert")
const loader = document.querySelector(".result-loader")
const result = document.querySelector(".result")
let percent;

// Dynamiczne tworzenie opcji listy rozwijanej
const services = [{
       value: 1,
       title: "Bardzo dobra - 20%"
     },{
       value: 2,
       title: "Dobra - 10%"
     },{
       value: 3,
       title: "Kiepska - 2%"
     }]

services.forEach(function(service) {
       const option = document.createElement('option');
       option.textContent = service.title;
       option.value = service.value;
       tip.appendChild(option);
})

// Kalkulacja

const loaderOn = () => {
      loader.style.display = "block";
      result.style.display = "none";
}

const tipCaltulation = () => {
      tipAmount.innerText = `${Number(bill.value) * Number(percent)} złotych`;
      totalAmount.innerText = `${Number(bill.value) + Number(bill.value) * Number(percent)} złotych`;
      personAmount.innerText = `${(Number(bill.value) + Number(bill.value) * Number(percent)) / Number(people.value)} złotych`;
}

const loaderOffAndResult = () => {
      alert.style.display = "none";
      setTimeout(function() {
        loader.style.display = "none";
        result.style.display = "block";
        tipCaltulation();
      },1000)
}

button.addEventListener("click", function(click){
      click.preventDefault();      
      if (tip.value === "1") {
        percent = 0.2;
        loaderOn();
        loaderOffAndResult();
        }
      else if (tip.value === "2") {
        percent = 0.1;
        loaderOn();
        loaderOffAndResult();       
        }
      else if (tip.value === "3") {
        percent = 0.02;
        loaderOn();
        loaderOffAndResult();
        }
      else {
        alert.style.display = "block";
        tipAmount.innerText = `0 złotych`;
        totalAmount.innerText = `0 złotych`;
        personAmount.innerText = `0 złotych`;
      };               
})