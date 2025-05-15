const sum3547 = require('../sum3547.js');

test('adds 31 + 44 to equal 75 + offset 0.9183440013160447', () => {
  expect(sum3547(31, 44)).toBe(75 + 0.9183440013160447);
});