let scor=document.querySelector("p")

let userScor=localStorage.getItem("score")
console.log(userScor)
scor.textContent='your scor is '+userScor

