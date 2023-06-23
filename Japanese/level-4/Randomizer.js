window.onload = choosePic;
var myPix = new Array("../img/na.png", "../img/ni.png", "../img/nu.png", "../img/ne.png", "../img/no.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
