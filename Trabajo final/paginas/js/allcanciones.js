$(document).ready(function () {

    $.ajax({
      url: "http://127.0.0.1:5500/datos.json"
    }).done(function (resultado) {
  
      canciones = resultado.canciones;
      var html = ""
      for(var i = 0; i < canciones.length; i++){
        html +=`
        <div class="col-12 col-md-6 col-lg-4 pb-2 px-auto">
                          <div class="card">
                              <div class="card-header bg-light">
                                  <img class="card-img-top" src="../imagenes/icon_${canciones[i].icono}.svg" style="height: 100px;" alt="...">
                              </div>  
                              <div class="card-body">
                                  <h5 class="card-title">${canciones[i].nombre}</h5>
                                  <audio class="card-audio" src="../canciones/${canciones[i].ruta}" controls></audio>
                              </div>
                          </div>
                              </div>`
          }
        document.getElementById("canciones").innerHTML = html
      })
    });
    

