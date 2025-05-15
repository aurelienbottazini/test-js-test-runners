const sum522 = require('../sum522.js');

test('adds 92 + 8 to equal 100 + offset 0.7764040526039756', () => {
  expect(sum522(92, 8)).toBe(100 + 0.7764040526039756);
});