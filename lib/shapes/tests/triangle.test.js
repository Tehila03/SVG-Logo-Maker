const Triangle = require('../triangle');

describe('Triangle', () => {
  describe('Letters Too Long', () => {
    test('should throw an error if letters input is more than three characters long', () => {
      const triangle = () => new Triangle('AAAA', 'White', 'Green');
      const err = new Error(`Can only Generate logo's up to three letters`);
      expect(triangle).toThrowError(err);
    });
  });
  describe('Letters Length', () => {
    test('should not throw an error if letters input is less than three characters long', () => {
      const triangle = () => new Triangle('AAA', 'White', 'Green');
      const err = new Error(`Can only Generate logo's up to three letters`);
      expect(triangle).not.toThrowError(err);
    });
  });
  describe('Render', () => {
    test('should not throw error if render() is called', () => {
      const triangle = new Triangle('AAA', 'White', 'Green');
      const err = new Error('Child class must implement a render() method.')
      expect(triangle.render).not.toThrow(err);
    });
  });
  describe('Render', () => {
    test('When creating a new instance of the class the Html will look as expected', () => {
      const triangle = new Triangle('AAA', 'White', 'Green');
      const expectedHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 240,190 60,190" fill="Green" class="triangle" /><text x="150" y="130" font-size="45" text-anchor="middle" fill="White">AAA</text></svg>`;
      expect(triangle.render()).toEqual(expectedHtml);
    });
  });
});