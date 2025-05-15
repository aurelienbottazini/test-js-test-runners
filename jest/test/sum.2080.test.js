const sum2080 = require('../sum2080.js');

test('adds 11 + 92 to equal 103 + offset 0.6190844095866723', () => {
  expect(sum2080(11, 92)).toBe(103 + 0.6190844095866723);
});