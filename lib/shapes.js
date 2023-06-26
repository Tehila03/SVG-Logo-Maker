class Shape {
    constructor(letters, textColor, ShapeColor) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = ShapeColor;
        if (letters.length > 3) {
            throw new Error('Cam only generate logo`s up to 3 letters');
        };
    };
    render() {
        throw new Error('Must implement render');
    };
}
module.exports = Shape;