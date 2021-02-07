$(document).ready(function(){
    const fs = require('fs');
    let $resume = $('#resumeBTN');
    $resume.click(function(){
    let path = './assets/files/Michelle_Hall_Resume.pdf';
    fs.readFile(path, 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)

    );
});

});
