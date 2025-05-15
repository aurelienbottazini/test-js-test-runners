const sum97 = require('../sum97.js');

test('adds 2 + 51 to equal 53 + offset 0.34261236510680626', () => {
  expect(sum97(2, 51)).toBe(53 + 0.34261236510680626);
});