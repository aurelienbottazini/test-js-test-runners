const sum1529 = require('../sum1529.js');

test('adds 84 + 39 to equal 123 + offset 0.7395956521215176', () => {
  expect(sum1529(84, 39)).toBe(123 + 0.7395956521215176);
});