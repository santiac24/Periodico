 function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }
  
 html=`
 `
  function validar(formulario) {
  
    limpiarErrores();
  
  
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      document.getElementById("errorEmail").innerText = "Ingresa el correo con el que te registraste"+html;
      formulario.email.focus();
      return false;
    }
  
    if (formulario.contrasena.value.trim().length == 0) {
      document.getElementById("errorContrasena").innerText = "Ingrese su contraseña"+html;
      formulario.contrasena.focus();
      return false;
    }
  
    if (formulario.contrasena.value.trim().length < 8) {
      document.getElementById("errorContrasena").innerText = "La contraseña debe tener minimo 8 caracteres"+html;
      formulario.contrasena.focus();
      return false;
    }
  
  
    alert("Has iniciado sesión satisfactoriamente")
  
    return true;
  }
  