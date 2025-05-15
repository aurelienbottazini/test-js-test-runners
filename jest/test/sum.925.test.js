const sum925 = require('../sum925.js');

test('adds 4 + 51 to equal 55 + 0.28178963412453273', () => {
  expect(sum925(4, 51)).toBe(55 + 0.28178963412453273);
});