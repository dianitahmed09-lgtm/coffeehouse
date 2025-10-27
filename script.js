function mostrarAlerta() {
  alert("Gracias por tu interés ❤️ ¡Tu café te espera!");
}

document.getElementById("form-contacto").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensaje enviado con éxito ☕");
  this.reset();
});

