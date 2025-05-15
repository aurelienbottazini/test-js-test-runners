const sum4685 = require('../sum4685.js');

test('adds 83 + 8 to equal 91 + offset 0.8464850313275262', () => {
  expect(sum4685(83, 8)).toBe(91 + 0.8464850313275262);
});