$(document).ready(function(){
    var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});
    const fs = require('fs');
    let $resume = $('#resumeBTN');
    $resume.click(function(){
    let path = './assets/files/Michelle_Hall_Resume.pdf';
    fs.readFile(path, 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)

    );
});


});

