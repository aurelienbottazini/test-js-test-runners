const sum215 = require('../sum215.js');

test('adds 73 + 97 to equal 170 + offset 0.07295135699696875', () => {
  expect(sum215(73, 97)).toBe(170 + 0.07295135699696875);
});