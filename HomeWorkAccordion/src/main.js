"use strict";



// --- FIRST TASK ---

// [...document.querySelector("#firstTask ul").children].map(li => {
//     li.onclick = function()
//     {
//         document.querySelector("#firstTask ul li.active").classList.remove("active");
//         this.classList.add("active");
//     }
// })




// --- SECOND TASK ---

// [...document.querySelector("#secondTask ul").children].map(li => {
//     li.onclick = function()
//     {
//         document.querySelector("#secondTask ul li.active").classList.remove("active");
//         this.classList.add("active");

//         let id = this.getAttribute("data-id");
//         let info = document.querySelector(`.info[data-id="${id}"]`);

//         document.querySelector(".info.active").classList.remove("active")
//         info.classList.add("active");
//     }
// })




// --- THIRD TASK ---

// [...document.querySelector("#thirdTask ul").children].map(li => {
//     li.onclick = function()
//     {
//         let result = document.querySelector("#thirdTask .container").style.backgroundColor = this.style.backgroundColor;
//         console.log(result);
//     }
// })