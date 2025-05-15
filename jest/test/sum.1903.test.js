const sum1903 = require('../sum1903.js');

test('adds 1 + 44 to equal 45 + offset 0.4952448649350295', () => {
  expect(sum1903(1, 44)).toBe(45 + 0.4952448649350295);
});