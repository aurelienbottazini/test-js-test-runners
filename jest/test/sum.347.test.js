const sum347 = require('../sum347.js');

test('adds 35 + 30 to equal 65 + offset 0.5052629219150194', () => {
  expect(sum347(35, 30)).toBe(65 + 0.5052629219150194);
});