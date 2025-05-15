const sum354 = require('../sum354.js');

test('adds 82 + 48 to equal 130 + offset 0.0936605602005377', () => {
  expect(sum354(82, 48)).toBe(130 + 0.0936605602005377);
});