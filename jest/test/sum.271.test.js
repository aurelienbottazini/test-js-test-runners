const sum271 = require('../sum271.js');

test('adds 61 + 4 to equal 65 + 0.7467972234185396', () => {
  expect(sum271(61, 4)).toBe(65 + 0.7467972234185396);
});