const sum1591 = require('../sum1591.js');

test('adds 22 + 68 to equal 90 + offset 0.8758574077102124', () => {
  expect(sum1591(22, 68)).toBe(90 + 0.8758574077102124);
});