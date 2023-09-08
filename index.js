const menu = document.querySelector(".menu");
const bar = document.querySelector(".sidebar");
const large = document.querySelector(".container");

menu.addEventListener("click", function () {
   bar.classList.toggle("small") 
   large.classList.toggle("large-container") 

})




let dm = document.querySelector("#icon");

dm.addEventListener("click",function(){
   document.body.classList.toggle("dark");
   if (document.body.classList.contains("dark")) {
      icon.src = "./images/light.png";
   }
   else {
      icon.src = "./images/blackbulb.png";
   }
})