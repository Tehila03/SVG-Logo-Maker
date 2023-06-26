const Shape = require('./shapes');
class Square extends Shape {
    constructor(letters, textColor, shapeColor) {
        super(letters, textColor, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points= "60,10 240,10 240,190 60,190" fill="${this.shapeColor}" class="square" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.letters}</text></svg>`
    }
}
module.exports = Square;