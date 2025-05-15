const sum1827 = require('../sum1827.js');

test('adds 54 + 72 to equal 126 + 0.17642237224388224', () => {
  expect(sum1827(54, 72)).toBe(126 + 0.17642237224388224);
});