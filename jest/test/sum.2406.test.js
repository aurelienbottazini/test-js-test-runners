const sum2406 = require('../sum2406.js');

test('adds 15 + 64 to equal 79 + 0.9879816158400863', () => {
  expect(sum2406(15, 64)).toBe(79 + 0.9879816158400863);
});