const sum4822 = require('../sum4822.js');

test('adds 8 + 67 to equal 75 + 0.49997231708615775', () => {
  expect(sum4822(8, 67)).toBe(75 + 0.49997231708615775);
});