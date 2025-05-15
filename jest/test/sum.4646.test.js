const sum = require('../sum');

test('adds 95 + 81 to equal 176', () => {
  expect(sum(95, 81)).toBe(176);
});