function openImg(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function blur(block){
var cont = document.getElementById("contant_1");
alert(cont.id);
cont.id="contant";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  var cont = document.getElementById("contant_1");

  cont.id="contant";
}


function closeNav() {

  document.getElementById("mySidenav").style.width = "0";
  var cont = document.getElementById("contant");

  cont.id="contant_1";
}
