const sum = require('../sum');

test('adds 92 + 84 to equal 176', () => {
  expect(sum(92, 84)).toBe(176);
});