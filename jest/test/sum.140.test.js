const sum140 = require('../sum140.js');

test('adds 42 + 20 to equal 62 + 0.16378050666125898', () => {
  expect(sum140(42, 20)).toBe(62 + 0.16378050666125898);
});