const Square = require('../square');

describe('Square', () => {
  describe('Letters Too Long', () => {
    test('should throw an error if letters input is more than three characters long', () => {
      const square = () => new Square('AAAA', 'White', 'Green');
      const err = new Error(`Can only Generate logo's up to three letters`);
      expect(square).toThrowError(err);
    });
  });
  describe('Letters Length', () => {
    test('should not throw an error if letters input is less than three characters long', () => {
      const square = () => new Square('AAA', 'White', 'Green');
      const err = new Error(`Can only Generate logo's up to three letters`);
      expect(square).not.toThrowError(err);
    });
  });
  describe('Render', () => {
    test('should not throw error if render() is called', () => {
      const square = new Square('AAA', 'White', 'Green');
      const err = new Error('Child class must implement a render() method.')
      expect(square.render).not.toThrow(err);
    });
  });
  describe('Render', () => {
    test('When creating a new instance of the class the Html will look as expected', () => {
      const square = new Square('AAA', 'White', 'Green');
      const expectedHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points= "60,10 240,10 240,190 60,190" fill="Green" class="square" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="White">AAA</text></svg>`;
      expect(square.render()).toEqual(expectedHtml);
    });
  });
});