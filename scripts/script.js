// JavaScript Document
console.log("hi");
const hamburgerButton = document.querySelector("header button");
const hamburgerMenu = document.querySelector("header nav")

hamburgerButton.addEventListener("click", function(){
    hamburgerButton.classList.toggle("open");

    const isOpen=hamburgerButton.classList.contains("open");
    hamburgerButton.setAttribute("aria-expanded", isOpen );
    console.log("dit is leuk");

    hamburgerMenu.classList.toggle("menuOpen");
    const menuOpen = hamburgerMenu.classList.contains("menuOpen");
    hamburgerMenu.setAttribute("menuOpen", true );
    console.log("lukt het?");

});


document.querySelectorAll("table button").forEach(buttonTable => {
    buttonTable.addEventListener("click", function () {
      const buttonTr = this.closest("tr");
      const detailTr = buttonTr.nextElementSibling;
  
      if (detailTr.style.display === "table-row") {
        detailTr.style.display = "none";
      } else {
        detailTr.style.display = "table-row";
      }
    });
});



//LASERSSSS
  
const doneerBtn = document.querySelectorAll('section[aria-label="aandacht"] button');
const lasers = document.querySelector('#lasers');

doneerBtn.forEach(dBtn => {
  dBtn.addEventListener('click', () => {
    lasers.classList.remove('lasers-hidden');
    setTimeout(() => {
      lasers.classList.add('lasers-hidden');
    }, 5000);
  });
});



  
