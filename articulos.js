function mostrar() { 
    document.getElementById("caja1").style.display = "block";
document.getElementById("boton01").style.display = "block";
}
  function ocultar() {
    document.getElementById("boton01").style.display = "none";
    document.getElementById("caja1").style.display = "none";
  }
  function mostrar1() {
    document.getElementById("caja2").style.display = "block";
document.getElementById("boton02").style.display = "block";
}
  function ocultar1() {
    document.getElementById("boton02").style.display = "none";
    document.getElementById("caja2").style.display = "none";
  }
  function ocultar2() {
    document.getElementById("boton03").style.display = "none";
    document.getElementById("caja3").style.display = "none";
  }
  function mostrar2() {
    document.getElementById("caja3").style.display = "block";
document.getElementById("boton03").style.display = "block";
}
  function ocultar3() {
    document.getElementById("boton04").style.display = "none";
    document.getElementById("caja4").style.display = "none";
  }
  function mostrar3() {
    document.getElementById("caja4").style.display = "block";
document.getElementById("boton04").style.display = "block";
}
  function ocultar4() {
    document.getElementById("boton05").style.display = "none";
    document.getElementById("caja5").style.display = "none";
  }
  function mostrar4() {
    document.getElementById("caja5").style.display = "block";
document.getElementById("boton05").style.display = "block";
}
  function ocultar5() {
    document.getElementById("boton06").style.display = "none";
    document.getElementById("caja6").style.display = "none";
  }
  function mostrar5() {
    document.getElementById("caja6").style.display = "block";
document.getElementById("boton06").style.display = "block";
}
  function ocultar6() {
    document.getElementById("boton07").style.display = "none";
    document.getElementById("caja7").style.display = "none";
  }
  function mostrar6() {
    document.getElementById("caja7").style.display = "block";
document.getElementById("boton07").style.display = "block";
}
  function ocultar7() {
    document.getElementById("boton08").style.display = "none";
    document.getElementById("caja8").style.display = "none";
  }
  function mostrar7() {
    document.getElementById("caja8").style.display = "block";
document.getElementById("boton08").style.display = "block";
}
function toggleMenu(event) {
    const menu = document.getElementById("menu");
    const menuButton = document.querySelector(".menu-button");

    if (!menu.classList.contains("open")) {
        menu.style.display = "block"; 
        setTimeout(() => {
            menu.classList.add("open"); 
            menuButton.classList.add("open"); 
            document.body.classList.add("no-scroll"); 
        }, 10); 
    } else {
        menu.classList.remove("open"); 
        menuButton.classList.remove("open");
        setTimeout(() => {
            menu.style.display = "none"; 
            document.body.classList.remove("no-scroll"); 
        }, 500); 
    }
  }
    
    event.stopPropagation();

function toggleTooltip(event) {
  event.preventDefault(); 
  const tooltip = document.getElementById("tooltip");
  const isVisible = tooltip.style.display === "block"; 

  tooltip.style.display = isVisible ? "none" : "block";
  if (!isVisible) {
      document.addEventListener('click', function closeTooltip(event) {
          const isClickInside = tooltip.contains(event.target) || event.target.classList.contains('ofertas');

          // Cerrar el bocadillo si el clic está fuera
          if (!isClickInside) {
              tooltip.style.display = "none";
              document.removeEventListener('click', closeTooltip); 
          }
      });
  }
}