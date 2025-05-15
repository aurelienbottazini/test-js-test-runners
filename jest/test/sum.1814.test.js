const sum1814 = require('../sum1814.js');

test('adds 37 + 59 to equal 96 + offset 0.6375489700675299', () => {
  expect(sum1814(37, 59)).toBe(96 + 0.6375489700675299);
});