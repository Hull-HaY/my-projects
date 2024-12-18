//document.getElementById("count-el").innerText = 
let restartEl = document.getElementById("restart-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0

console.log(saveEl)

function increment() {
  count += 1
  countEl.innerText = count
  eval(count+count);
  saveEl.textContent +=  countStr
  
  console.log(count)
  //turning back the count to 0
  countEl.innerText = 0
  count =0
 
  }



/*function save() {
 
 
} */

function decrement() {
 
  count += -1
  countEl.innerText = count
  if(count<1){
    count=1
  }
}








 









/*
let welcomeEl = document.getElementById("welcome-el")

let name = "Ian Adika"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

//adding emojis
welcomeEl.innerText += "🖐"
*/

