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
      mostrar("span-cel");
      celular.focus();
      return false;
    }else {
      ocultar("span-cel");
    }
  }

/*** Validando campo nombre***/
  function validaNombre(name){
    if(name.value.length == 0 ){
      mostrar("span-name");
      name.focus();
      return false;
    }
    for (var i = 1; i< name.value.length ; i++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){
        mostrar("span-name");
        name.focus();
        return false;
      }
    }
    if( !(/[A-ZÑÁÉÍÓÚ]/.test(name.value.split("")[0]))){
      mostrar("span-name");
      name.focus();
      return false;
    }
    else {
      ocultar("span-name");
    }
  }

  /*** Validando campo email***/
  function validaEmail(email){
    if(email.value.length == 0 || (!(/[\w-\.]{3,}@[\w-]{3,}\.[A-Za-z]{2,3}/.test(email.value))) ){
      mostrar(span)
      email.focus();
      return false;
    }else {
      ocultar(span);
    }
  }


  /*** Validando campo city***/
  function validaCity(city){
      if(city.value.length == 0 ){
        mostrar("span-city");
        city.focus();
        return false;
      }
      for (var i = 1; i< city.value.length ; i++){
        if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(city.value.split("")[i]))){
          mostrar("span-city");
          city.focus();
          return false;
        }
      }
      if( !(/[A-ZÑÁÉÍÓÚ]/.test(city.value.split("")[0]))){
        mostrar("span-city");
        city.focus();
        return false;
      }
      else {
        ocultar("span-city");
      }
    }


  function ocultar(span){
    var span = document.getElementById(span);
    span.setAttribute("style","display:none");
  }

  function mostrar(span){
      var span = document.getElementById(span);
      span.setAttribute("style","display:block");
  }
