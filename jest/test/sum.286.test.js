const sum286 = require('../sum286.js');

test('adds 39 + 18 to equal 57 + offset 0.9475226081215489', () => {
  expect(sum286(39, 18)).toBe(57 + 0.9475226081215489);
});