var element = document.querySelector(".formulario");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validaFormulario();
});

function validaFormulario(){
  var celular= document.getElementById("cel");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");

  validaCelular(celular);
  validaNombre(name);
  validaEmail(email);
  validaCity(city);
}

  function validaCelular(celular){
    if(celular.value.length == 0 || (!(/[0-9]{9}/.test(celular.value)))){
      mostrar(celular);
      return false;
    }else {
      ocultar(celular);
    }
  }

/*** Validando campo nombre***/
  function validaNombre(name){
    if(name.value.length == 0 ){
      mostrar(name);
      return false;
    }
    for (var i = 1; i< name.value.length ; i++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){
        mostrar(name);
        return false;
      }
    }
    if( !(/[A-ZÑÁÉÍÓÚ]/.test(name.value.split("")[0]))){
      mostrar(name);
      return false;
    }
    else {
      ocultar(name);
    }
  }

  /*** Validando campo email***/
  function validaEmail(email){
    if(email.value.length == 0 || (!(/[\w-\.]{3,}@[\w-]{3,}\.[A-Za-z]{2,3}/.test(email.value))) ){
      mostrar(email)
      return false;
    }else {
      ocultar(email);
    }
  }


  /*** Validando campo city***/
  function validaCity(city){
      if(city.value.length == 0 ){
        mostrar(city);
        return false;
      }
      for (var i = 1; i< city.value.length ; i++){
        if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(city.value.split("")[i]))){
          mostrar(city);
          return false;
        }
      }
      if( !(/[A-ZÑÁÉÍÓÚ]/.test(city.value.split("")[0]))){
        ocultar(city)
        return false;
      }
      else {
        mostrar(city);
      }
    }


  function ocultar(input){
    var span = input.nextElementSibling;
    span.setAttribute("style","display:none");
  }

  function mostrar(input){
      var span = input.nextElementSibling;
      span.setAttribute("style","display:block");
  }
