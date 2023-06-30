const Shape = require('../shapes/shapes');
class Triangle extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 240,190 60,190" fill="${this.shapeColor}" class="triangle" /><text x="150" y="130" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.letters}</text></svg>`
    }
}
module.exports = Triangle;