const fs = require('fs');
const inquirer = require('inquirer');


const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

const questions = [{ type: "input", name: "letters", message: "Choose up to 3 letters" }, { type: "input", name: "textColor", message: "Choose a color for the text" }, { type: "list", name: "shape", message: "Choose a shape", choices: ["Square", "Circle", "Triangle"] }, { type: "input", name: "shapeColor", message: "Choose a color for the shape" }];

inquirer.prompt(questions).then(
    response => {
        if (response.shape == "Square") {
            const svg = new Square(response.letters, response.textColor, response.shapeColor);
            return svg.render();
        }
        else if (response.shape == "Circle") {
            const svg = new Circle(response.letters, response.textColor, response.shapeColor);
            return svg.render();
        }
        else if (response.shape == "Triangle") {
            const svg = new Triangle(response.letters, response.textColor, response.shapeColor);
            return svg.render();
        }
    }).then(response => {
        createLogo('logo.svg', response);
    });

function createLogo(fileName, svg) {

    fs.writeFile(fileName, svg, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("SVG file generated successfully");
        }
    });
}    