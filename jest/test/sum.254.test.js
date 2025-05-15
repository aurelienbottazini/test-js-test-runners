const sum254 = require('../sum254.js');

test('adds 24 + 37 to equal 61 + offset 0.6892633221080191', () => {
  expect(sum254(24, 37)).toBe(61 + 0.6892633221080191);
});