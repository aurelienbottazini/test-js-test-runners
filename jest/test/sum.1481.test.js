const sum1481 = require('../sum1481.js');

test('adds 45 + 37 to equal 82 + 0.5844385297207831', () => {
  expect(sum1481(45, 37)).toBe(82 + 0.5844385297207831);
});