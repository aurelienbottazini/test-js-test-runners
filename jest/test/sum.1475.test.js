const sum1475 = require('../sum1475.js');

test('adds 34 + 80 to equal 114 + 0.8255435556432983', () => {
  expect(sum1475(34, 80)).toBe(114 + 0.8255435556432983);
});