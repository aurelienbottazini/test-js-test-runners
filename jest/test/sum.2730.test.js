const sum2730 = require('../sum2730.js');

test('adds 19 + 82 to equal 101 + 0.06343942243835254', () => {
  expect(sum2730(19, 82)).toBe(101 + 0.06343942243835254);
});