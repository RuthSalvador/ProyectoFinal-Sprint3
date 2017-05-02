window.addEventListener("scroll", animationScroll);

function animationScroll() {
    if (document.body.scrollTop > 1) {
      var mostrar = document.getElementsByClassName("pink");
      for (var i = 0; i < mostrar.length; i++){
        mostrar[i].classList.add("visible");
      }
      var backHeader = document.getElementsByClassName("back-header");
      for (var j = 0; j < backHeader.length; j++) {
        backHeader[j].classList.add("back-white");
      }
      var navOption = document.getElementsByClassName("nav-option");
      for (var k = 0; k < navOption.length; k++) {
        navOption[k].classList.add("color-gris");
      }
      var logo = document.getElementById("logo");
      logo.setAttribute("src","assets/img/logo-pink.png");
      logo.setAttribute("alt","logo pink");
    }
};



document.getElementById("cel").addEventListener("click", function(e){
  e.preventDefault();

  var divName = document.getElementById("div-name");
  var divEmail = document.getElementById("div-email");
  var divCity = document.getElementById("div-city");

  divName.classList.remove("no-show");
  divEmail.classList.remove("no-show");
  divCity.classList.remove("no-show");
});
