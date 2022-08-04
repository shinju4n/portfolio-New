//  상단 이동 만들기
goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 다크모드 만들기
var count = true;

const darkmode_btn = document.querySelector(".dark_mode");

function darkModeOn() {
  count = !count;
  if (count == true) {
    document.body.classList.remove("dark_moode");
    document.querySelector(".header").classList.remove("dark_mode");
    document.querySelector(".jumbotron").classList.remove("dark_mode");
    document.querySelector(".profile").classList.remove("dark_mode");
    document.querySelector(".portfolio").classList.remove("dark_mode");
    document.querySelector(".contact").classList.remove("dark_mode");
    document.querySelector(".dark_mode_btn").classList.remove("white_mode");
    document.querySelector(".dark_mode_btn").innerHTML = "☀️ 일반 모드로 보기";
  } else {
    document.body.classList.add("dark_moode");
    document.querySelector(".header").classList.add("dark_mode");
    document.querySelector(".jumbotron").classList.add("dark_mode");
    document.querySelector(".profile").classList.add("dark_mode");
    document.querySelector(".portfolio").classList.add("dark_mode");
    document.querySelector(".contact").classList.add("dark_mode");
    document.querySelector(".dark_mode_btn").classList.add("white_mode");
    document.querySelector(".dark_mode_btn").innerHTML = "🌗 다크 모드로 보기";
  }
}

window.addEventListener("scroll", function () {
  var height = document.documentElement.scrollTop;
  console.log(height);
  if (height > 774) {
    this.document.querySelector(".go-to-top").style.opacity = 1;
  } else {
    this.document.querySelector(".go-to-top").style.opacity = 0;
  }
});
