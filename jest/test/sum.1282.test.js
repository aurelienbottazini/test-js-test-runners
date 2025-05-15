const sum1282 = require('../sum1282.js');

test('adds 77 + 84 to equal 161 + offset 0.83785734036822', () => {
  expect(sum1282(77, 84)).toBe(161 + 0.83785734036822);
});