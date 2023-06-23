window.onload = choosePic;
let myPix = new Array("../img/a.png", "../img/i.png", "../img/u.png", "../img/e.png", "../img/o.png");
function choosePic() {
     let randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
