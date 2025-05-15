const sum1411 = require('../sum1411.js');

test('adds 21 + 6 to equal 27 + 0.6783314402514847', () => {
  expect(sum1411(21, 6)).toBe(27 + 0.6783314402514847);
});