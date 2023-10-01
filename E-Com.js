let icon = document.querySelector("#icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);
})

//navbar 

let shops = document.getElementById("shops");
let rewiews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", ()=>{
    shops.style.color = " aqua ";
    rewiews.style.color = " white ";
    blogs.style.color = " white";
    contacts.style.color = "white";
})

rewiews.addEventListener("click", ()=>{
    shops.style.color = " white ";
    rewiews.style.color = " aqua ";
    blogs.style.color = " white";
    contacts.style.color = "white";
})

blogs.addEventListener("click", ()=>{
    shops.style.color = "white";
    rewiews.style.color = " white ";
    blogs.style.color = " aqua";
    contacts.style.color = "white";
})

contacts.addEventListener("click", ()=>{
    shops.style.color = "white";
    rewiews.style.color = " white ";
    blogs.style.color = "white";
    contacts.style.color = "aqua";
})

// card functionality
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");

let container = document.querySelector("#container");

console.log(crd);

crd.forEach(function(curValue){
    curValue.addEventListener("click", function(){
        
        itemPage.style.display = "flex";
        container.style.display = "none";
    })
})
 
 


