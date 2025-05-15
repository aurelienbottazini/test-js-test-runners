const sum1752 = require('../sum1752.js');

test('adds 18 + 66 to equal 84 + offset 0.40625678808004984', () => {
  expect(sum1752(18, 66)).toBe(84 + 0.40625678808004984);
});