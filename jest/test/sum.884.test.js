const sum884 = require('../sum884.js');

test('adds 21 + 8 to equal 29 + offset 0.17175090841720841', () => {
  expect(sum884(21, 8)).toBe(29 + 0.17175090841720841);
});