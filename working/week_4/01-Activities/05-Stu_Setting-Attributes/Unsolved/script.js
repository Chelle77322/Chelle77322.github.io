var addHref  = document.querySelectorAll("a");
var addImg = document.querySelectorAll("img");
var findElement = document.getElementById("main");
var imgDraw = document.createElement("img");
var addText = document.querySelector("h4");



console.log(findElement);
console.log(addHref);
console.log(addImg);
console.log(imgDraw);
console.log(addText);

imgDraw.setAttribute("src","images/image_1.jpg");
document.body.append(imgDraw);

addText.textContent="You have just added this text";
document.body.append(addText);
addText.setAttribute("style","fontSize = 100px");


console.log(addText);



addImg[0].setAttribute("src","images/image_1.jpg");
addImg[1].setAttribute("src","images/image_2.jpg");
addImg[2].setAttribute("src", "images/image_3.jpg");

addHref[0].setAttribute("href", "http://www.google.com");
addHref[1].setAttribute("href", "http://www.facebook.com");
addHref[2].setAttribute("href", "http://www.news.com.au");




