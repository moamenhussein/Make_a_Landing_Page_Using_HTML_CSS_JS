let photo = document.getElementById("photo");
let container = document.getElementsByClassName("container")[0];
function change(src) {
  photo.src = src
}

function changeColor(color) {
  container.style.background = color
}