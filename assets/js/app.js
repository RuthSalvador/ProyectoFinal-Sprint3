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
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");
  name.classList.remove("no-show");
  email.classList.remove("no-show");
  city.classList.remove("no-show");
});
