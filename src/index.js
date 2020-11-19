import "./styles/style.scss";
import $ from "jquery";
import "slick-carousel";

if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

$(".right-arrow").on("click", function () {
  let imgs = [
    "images/webp/service-1.webp",
    "images/webp/service-2.webp",
    "images/webp/service-3.webp",
    "images/webp/service-4.webp",
  ];
  let big = $(".services__big-slider img");
  let index = imgs.indexOf($(big).attr("src"));
  console.log(index);
  if (index !== -1) {
    if (index + 1 > 3) {
      index = -1;
    }
  }
  $(big).attr("src", imgs[index + 1]);
});

$(".left-arrow").on("click", function () {
  let imgs = [
    "images/service-1.png",
    "images/service-2.png",
    "images/service-3.png",
    "images/service-4.png",
  ];
  let big = $(".services__big-slider img");
  let index = imgs.indexOf($(big).attr("src"));
  console.log(index);
  if (index !== -1) {
    if (index - 1 < 0) {
      index = 4;
    }
  }
  $(big).attr("src", imgs[index - 1]);
});

$(".services__nav-item").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".services__nav-item").removeClass("active");
    $(this).addClass("active");
  }
});

$(".clients__slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
