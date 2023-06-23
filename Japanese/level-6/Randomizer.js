window.onload = choosePic;
var myPix = new Array("../img/ma.png", "../img/mi.png", "../img/mu.png", "../img/me.png", "../img/mo.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
