function validateForm() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var errorMessage = document.getElementById("error-message");
    
    //validar el formato del correo electrónico
    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (nombres === "" || apellidos === "" || correo === "" || contraseña === "") {
      errorMessage.textContent = "Por favor, complete todos los campos.";
    } else if (!correoRegex.test(correo)) {
      errorMessage.textContent = "El correo no es válido.";
    } else {
      errorMessage.textContent = "";
  
      // si no hay errores, muestra los datos enviados
      displayData(nombres, apellidos, correo);
    }
  }
  // tomo datos del nombre, apellido, y correo 
  function displayData(nombres, apellidos, correo) {
    //almaceno la referencia de los elementos por si ID
    var formDataSection = document.getElementById("registrationForm");
    //creamos un nuevo elemento llamado userData que servirá para mostrar los datos
    var userData = document.createElement("div");
    // agrego los elementos enviados
    userData.innerHTML = "<h4>Datos enviados:</h4>" +
      "<p><strong>Nombres:</strong> " + nombres + "</p>" +
      "<p><strong>Apellidos:</strong> " + apellidos + "</p>" +
      "<p><strong>Correo:</strong> " + correo + "</p>";
    formDataSection.parentNode.replaceChild(userData, formDataSection);
  }
  