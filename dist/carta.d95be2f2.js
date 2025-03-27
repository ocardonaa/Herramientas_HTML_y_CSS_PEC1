let cards=document.querySelectorAll(".container-card");cards.forEach(e=>{let c=e.querySelector(".front-card"),l=e.querySelector(".back-card");c.addEventListener("click",function(){c.style.display="none",l.style.display="block"}),l.addEventListener("click",function(){c.style.display="block",l.style.display="none"})});
//# sourceMappingURL=carta.d95be2f2.js.map
