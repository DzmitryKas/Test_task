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

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
}) 