/*
Developer: Frankie Barrios
Date:      9/25/2018
Purpose:   ImageSwapping Assignment
*/

//Array of Images
var aryImages = ["1.jpg", "2.jpg", "3.jpg"];

//Image Swap Function
function onClick(element) {
    document.getElementById("right").src = element.getAttribute('src');
}
