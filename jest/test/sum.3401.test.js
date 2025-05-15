const sum3401 = require('../sum3401.js');

test('adds 8 + 72 to equal 80 + 0.6516647382511429', () => {
  expect(sum3401(8, 72)).toBe(80 + 0.6516647382511429);
});