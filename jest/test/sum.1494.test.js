const sum1494 = require('../sum1494.js');

test('adds 68 + 57 to equal 125 + offset 0.1836111605412497', () => {
  expect(sum1494(68, 57)).toBe(125 + 0.1836111605412497);
});