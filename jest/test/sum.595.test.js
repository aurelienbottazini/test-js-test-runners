const sum595 = require('../sum595.js');

test('adds 39 + 73 to equal 112 + 0.4460898240026612', () => {
  expect(sum595(39, 73)).toBe(112 + 0.4460898240026612);
});