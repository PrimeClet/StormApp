function toggleSideBar(){

var x = document.getElementById("sidebar-menu");
var y = document.getElementById("card-row");


if (x.style.display === "none") {
  x.style.display = "block";
  y.style.width = "";

} else {
  x.style.display = "none";
  y.style.width = "100%";
}

}



