const sum1568 = require('../sum1568.js');

test('adds 23 + 45 to equal 68 + offset 0.9648676809942345', () => {
  expect(sum1568(23, 45)).toBe(68 + 0.9648676809942345);
});