var element = document.querySelector(".formulario");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validaFormulario();
});

function validaFormulario(){
  var cel= document.getElementById("cel");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");

  function validaCelular(celular){
    if(celular.value.length == 0){
      mostrar("Por favor ingrese su celular",celular);
      celular.focus();
      return false;
    }
    if (!(/[0-9]{9}/.test(celular.value))){
      mostrar("El celular debe tener 9 dígitos",celular);
      celular.focus();
      return false;
    }else {
      ocultar(celular);
    }
  }

/*** Validando campo nombre***/
  function validaNombre(name){
    if(name.value.length == 0){
      mostrar("Por favor ingrese su nombre",name);
      name.focus();
      return false;
    }
    for (var i = 1; i< name.value.length ; i++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){
        mostrar("El nombre debe contener solamente letras (a-z), por favor intente de nuevo",name);
        name.focus();
        return false;
      }
    }
    if( !(/[A-ZÑÁÉÍÓÚ]/.test(name.value.split("")[0]))){
      mostrar("El nombre debe empezar en mayúscula, por favor intente de nuevo",name);
      name.focus();
      return false;
    }
    else {
      ocultar(name);
    }
  }

  /*** Validando campo email***/
  function validaEmail(email){
    if(email.value.length == 0){
      mostrar("Por favor ingrese su correo electrónico",email);
      email.focus();
      return false;
    } else if (!(/[\w-\.]{3,}@[\w-]{3,}\.[A-Za-z]{2,3}/.test(email.value))){
      mostrar("El correo electrónico debe tener la siguiente forma email@dominio.com, por favor intente de nuevo",email);
      email.focus();
      return false;
    }else {
      ocultar(name);
    }
  }


  /*** Validando campo city***/
  function validaCity(city){
    if(city.value.length == 0){
      mostrar("Por favor ingrese su apellido",city);
      city.focus();
      return false;
    }
    for (var j = 1; j< city.value.length ; j++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(city.value.split("")[j]))){
        mostrar("El apellido debe contener solamente letras (a-z), por favor intente de nuevo",city);
        city.focus();
        return false;
      }
    }
    if( !(/[A-ZÑÁÉÍÓÚ]/.test(city.value.split("")[0]))){
      mostrar("El apellido debe empezar en mayúscula, por favor intente de nuevo",city);
      city.focus();
      return false;
    } else {
      ocultar(city);
    }
  }


  function ocultar(input){
    var span = input.nextElementSibling;
    span.setAttribute("style","display:none");
  }

  function mostrar(alerta,input){
      var span = input.nextElementSibling;
      span.setAttribute("style","display:block");
      span.innerHTML= alerta;
  }
