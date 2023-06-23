window.onload = choosePic;
var myPix = new Array("../img/ta.png", "../img/ti.png", "../img/tsu.png", "../img/te.png", "../img/to.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
