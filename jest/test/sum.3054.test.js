const sum3054 = require('../sum3054.js');

test('adds 22 + 97 to equal 119 + offset 0.5584746970497608', () => {
  expect(sum3054(22, 97)).toBe(119 + 0.5584746970497608);
});