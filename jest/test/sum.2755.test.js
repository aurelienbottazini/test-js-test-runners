const sum2755 = require('../sum2755.js');

test('adds 13 + 78 to equal 91 + offset 0.43179661296681093', () => {
  expect(sum2755(13, 78)).toBe(91 + 0.43179661296681093);
});