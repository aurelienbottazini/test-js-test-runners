const sum725 = require('../sum725.js');

test('adds 10 + 17 to equal 27 + 0.9778985450460462', () => {
  expect(sum725(10, 17)).toBe(27 + 0.9778985450460462);
});