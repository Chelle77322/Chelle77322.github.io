$(document).ready(function(){
    const fs = require('fs');

let file = "./assets/files/Michelle_Hall_Resume.pdf";
   
//Adding the code to download and save the resume file
$("#resumeBTN").click(function ResumeDownload(){
function ResumeDownload(file){
    FileSaver.saveAs(file, "./assets/files/Michelle_Hall_Resume.pdf");

}
console.log(file);

});
    
});