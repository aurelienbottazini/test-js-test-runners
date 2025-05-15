const sum950 = require('../sum950.js');

test('adds 98 + 72 to equal 170 + offset 0.020504388661322315', () => {
  expect(sum950(98, 72)).toBe(170 + 0.020504388661322315);
});