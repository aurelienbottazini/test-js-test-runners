const sum159 = require('../sum159.js');

test('adds 54 + 11 to equal 65 + 0.6018388335518414', () => {
  expect(sum159(54, 11)).toBe(65 + 0.6018388335518414);
});