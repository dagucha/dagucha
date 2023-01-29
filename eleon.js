var welcome = document.getElementById("welcome");
  setTimeout(function(){
    welcome.style.display = "none";

}, 5000);


const idsModal = ['miModal1', 'miModal2', 'miModal3', 'miModal4', 'miModal5', 'welcome']
const idsBtn = ['miBtn1', 'miBtn2', 'miBtn3', 'miBtn4', 'miBtn5']

idsBtn.forEach((id, index) => {
  var modal = document.getElementById(idsModal[index]);
  var btn = document.getElementById(id);
  var span = document.getElementsByClassName("close")[index];
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
});

// Obtener el botón de cierre
const closeButton = document.getElementById("close-welcome-screen");

// Obtener el contenedor de la pantalla de bienvenida
const welcomeScreen = document.getElementById("welcome-screen");

// Añadir un evento al botón de cierre para cerrar la pantalla de bienvenida
closeButton.addEventListener("click", function() {
  welcomeScreen.style.display = "none";
});

// Cerrar la pantalla de bienvenida después de 5 segundos
setTimeout(function() {
  welcomeScreen.style.display = "none";
}, 5000);













