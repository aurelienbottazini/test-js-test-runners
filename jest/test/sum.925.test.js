const sum925 = require('../sum925.js');

test('adds 43 + 72 to equal 115 + offset 0.24582623338925114', () => {
  expect(sum925(43, 72)).toBe(115 + 0.24582623338925114);
});