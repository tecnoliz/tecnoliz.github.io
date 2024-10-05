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
  // Cambiar la visibilidad del menú
  if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block"; // Muestra el menú
      // Evita que el clic en el botón cierre el menú
      event.stopPropagation(); 
  } else {
      menu.style.display = "none"; // Oculta el menú
  }
}

// Cierra el menú al hacer clic fuera de él
document.addEventListener("click", function(event) {
  const menu = document.getElementById("menu");
  const menuButton = document.querySelector(".menu-button");
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.style.display = "none"; // Oculta el menú
  }
});