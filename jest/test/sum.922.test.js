const sum922 = require('../sum922.js');

test('adds 70 + 70 to equal 140 + offset 0.9668704228746624', () => {
  expect(sum922(70, 70)).toBe(140 + 0.9668704228746624);
});