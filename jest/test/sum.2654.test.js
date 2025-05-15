const sum2654 = require('../sum2654.js');

test('adds 55 + 36 to equal 91 + offset 0.6044820893872207', () => {
  expect(sum2654(55, 36)).toBe(91 + 0.6044820893872207);
});