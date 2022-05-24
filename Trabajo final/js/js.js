$(document).ready(function () {

    $.ajax({
      url: "http://127.0.0.1:5500/datos.json"
    }).done(function (resultado) {
  
      canciones = resultado.canciones;

      

        reproducciones = canciones.sort(function(x,y){
        if (y.reproducciones>x.reproducciones){
          return 1;
        }
        if (y.reproducciones<x.reproducciones){
          return -1;
        }
        return 0;
    });
    var html = ""
    for(var j = 0; j < 3; j++){
      html +=`
      <div class="row">
      <div class="d-none d-md-block col-md-6 text-center"><h4 class="text-primary">${reproducciones[j].nombre}</h4></div>
      <div class="col-3 col-md-6 text-center"><audio src="canciones/${reproducciones[j].ruta}" controls></audio></div>
      </div>
      
      
  `
        }
      document.getElementById("top").innerHTML = html
    })
});

