var btn = document.querySelector("button");

function darkLight() {
  document.body.classList.toggle("bg-light");
  btn.classList.toggle("btn-dark");
  if (btn.innerHTML == "light") {
    btn.innerHTML = "dark";
  } else {
    btn.innerHTML = "light";
  }
}
