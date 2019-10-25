const buttonMoldal = document.querySelector(".request-header");
const buttonClose = document.querySelector(".form-close");
const buttonNews = document.querySelector(".all-news");

function show(state) {
  document.querySelector(".modal-form").style.display = state;
  document.querySelector(".filter").style.display = state;
}

buttonMoldal.addEventListener("click", () => {
  show("block");
});

buttonClose.addEventListener("click", () => {
  show("none");
});

function showNews() {
  document.querySelectorAll(".news-hidden").forEach(el => {
    console.log(1);
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
}

buttonNews.addEventListener("click", () => {
  showNews();
});

$(function() {
  $(".dnSlide-main").dnSlide();
});

$(".dnSlide-main").dnSlide({
  isOddShow: false,
  width: 800,
  height: 234,
  dnSlideFirstWidth: 600,
  dnSlideFirstHeight: 234,
  autoPlay: false,
  delay: 5000,
  scale: 0.9,
  speed: 500,
  verticalAlign: "middle", // or 'bottom', 'top'
  afterClickBtnFn: null
});
