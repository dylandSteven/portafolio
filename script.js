var el = $(".js-tilt-container");
var navbar = $(".navbar");
var textNav=$(".nav");


$(window).scroll(function () {
  if (   $(window).scrollTop() > 700 ) {
    navbar.removeClass("navbar-3");
    navbar.addClass("navbar-2");
    textNav.addClass("nav-2")
    textNav.removeClass("nav-3")
    console.log("1")

  }
 
   else {
    navbar.removeClass("navbar-2");
    navbar.addClass("navbar-3");
    textNav.addClass("nav-3")
    textNav.removeClass("nav-2")
  }
});

el.on("mousemove", function (e) {
  const { left, top } = $(this).offset();
  const cursPosX = e.pageX - left;
  const cursPosY = e.pageY - top;
  const cursFromCenterX = $(this).width() / 2 - cursPosX;
  const cursFromCenterY = $(this).height() / 2 - cursPosY;

  $(this).css(
    "transform",
    "perspective(500px) rotateX(" +
      cursFromCenterY / 40 +
      "deg) rotateY(" +
      -(cursFromCenterX / 40) +
      "deg) translateZ(10px)"
  );

  const invertedX =
    Math.sign(cursFromCenterX) > 0
      ? -Math.abs(cursFromCenterX)
      : Math.abs(cursFromCenterX);

  //Parallax transform on image
  $(this)
    .find(".js-perspective-neg")
    .css(
      "transform",
      "translateY(" +
        cursFromCenterY / 10 +
        "px) translateX(" +
        -(invertedX / 10) +
        "px) scale(1.15)"
    );

  $(this).removeClass("leave");
});

el.on("mouseleave", function () {
  $(this).addClass("leave");
});

var myModal = document.getElementById("prueba");
var myInput = document.getElementById("portafolio1");
var i = 1;
var eyeWork = document.getElementsByClassName("eyeWork");
var modales = document.getElementsByClassName("modal fade");
var array = [];
var j = 1;
var work = "work";
for (var i = 0; i < eyeWork.length; i++) {
  array.push(eyeWork[i]);
}

array.forEach(function (i) {
  i.onclick = function () {
    if (i.getAttribute("id") == "work1") {
      $("#portfolioItem" + 1).modal("show");
    }
    if (i.getAttribute("id") == "work2") {
      $("#portfolioItem" + 2).modal("show");
    }
    if (i.getAttribute("id") == "work3") {
      $("#portfolioItem" + 3).modal("show");
    }
    if (i.getAttribute("id") == "work4") {
      $("#portfolioItem" + 4).modal("show");
    }
    if (i.getAttribute("id") == "work5") {
      $("#portfolioItem" + 5).modal("show");
    }
    if (i.getAttribute("id") == "work6") {
      $("#portfolioItem" + 6).modal("show");
    }
  };
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


