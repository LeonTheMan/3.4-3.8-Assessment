function dropdown() {
  var x = document.getElementById("stickyNav");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}