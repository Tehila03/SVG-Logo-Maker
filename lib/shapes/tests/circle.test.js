const Circle = require('../circle');

describe('Circle', () => {
  describe('Letters Too Long', () => {
    test('should throw an error if letters input is more than three characters long', () => {
      const circle = () => new Circle('AAAA', 'White', 'Green');
      const err = new Error(`Can only Generate logo's up to three letters`);
      expect(circle).toThrowError(err);
    });
  });
  describe('Letters Length', () => {
    test('should not throw an error if letters input is less than three characters long', () => {
      const circle = () => new Circle('AAA', 'White', 'Green');
      const err = new Error(`Can only Generate logo's up to three letters`);
      expect(circle).not.toThrowError(err);
    });
  });
  describe('Render', () => {
    test('should not throw error if render() is called', () => {
      const circle = new Circle('AAA', 'White', 'Green');
      const err = new Error('Child class must implement a render() method.')
      expect(circle.render).not.toThrow(err);
    });
  });
  describe('Render', () => {
    test('When creating a new instance of the class the Html will look as expected', () => {
      const circle = new Circle('AAA', 'White', 'Green');
      const expectedHtml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="Green" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="White">AAA</text></svg>`;
      expect(circle.render()).toEqual(expectedHtml);
    });
  });
});