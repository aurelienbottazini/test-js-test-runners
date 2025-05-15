const sum1733 = require('../sum1733.js');

test('adds 76 + 41 to equal 117 + offset 0.12273415450028158', () => {
  expect(sum1733(76, 41)).toBe(117 + 0.12273415450028158);
});