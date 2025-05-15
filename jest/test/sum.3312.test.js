const sum3312 = require('../sum3312.js');

test('adds 39 + 15 to equal 54 + offset 0.7292317110097957', () => {
  expect(sum3312(39, 15)).toBe(54 + 0.7292317110097957);
});