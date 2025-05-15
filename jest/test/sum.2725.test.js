const sum2725 = require('../sum2725.js');

test('adds 82 + 8 to equal 90 + 0.1617879776777622', () => {
  expect(sum2725(82, 8)).toBe(90 + 0.1617879776777622);
});