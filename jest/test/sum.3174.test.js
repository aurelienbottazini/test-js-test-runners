const sum3174 = require('../sum3174.js');

test('adds 8 + 19 to equal 27 + 0.42076948902192257', () => {
  expect(sum3174(8, 19)).toBe(27 + 0.42076948902192257);
});