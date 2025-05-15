const sum209 = require('../sum209.js');

test('adds 43 + 15 to equal 58 + offset 0.16817347847867636', () => {
  expect(sum209(43, 15)).toBe(58 + 0.16817347847867636);
});