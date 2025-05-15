const sum2392 = require('../sum2392.js');

test('adds 74 + 32 to equal 106 + offset 0.7613975031753868', () => {
  expect(sum2392(74, 32)).toBe(106 + 0.7613975031753868);
});