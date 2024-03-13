let a = document.querySelector(".sidebar");
let b = document.querySelector(".test");
let c = document.getElementById("logo");
let d = document.querySelector(".active");
let e = document.querySelector(".page .head");
let f = document.querySelector(".loves");
let g = document.querySelector(".loves-lable");
let h = document.querySelector("#a-change");
let i = document.querySelector("#email");

window.addEventListener("scroll", function() {
  if(window.scrollY >= 100) {
    b.style.bottom = "0"
    b.style.transitionDuration = "0.3s"
    d.style.margin = "5px 0 5px 5px";
    e.style.top = "4px";
    e.style.height = "43px";
    e.style.borderRadius = "10px";
  }
  if(window.scrollY <= 80) {
    b.style.paddingTop = "0"
    d.style.margin = "0";
    e.style.top = "0";
    e.style.height = "72px";
    e.style.borderRadius = "0";
  }
})
c.onclick = function() {
  window.scrollTo(0, 0);
}
const colors = ['var(--grey-color)','var(--red-color)'];
function toggleColor(element) {
    let currentColor = element.dataset.color || colors[0];
    if (currentColor === colors[0]) {
        currentColor = colors[1];
    } else {
        currentColor = colors[0];
    }
    element.dataset.color = currentColor;
    element.style.color = currentColor;
}
f.addEventListener('click', function() {
  toggleColor(this);
});

// Input Custimization
function enableInput() {
  i.disabled = false;
}
function changeValue() {
    i.value = "";
}