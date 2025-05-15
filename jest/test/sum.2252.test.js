const sum2252 = require('../sum2252.js');

test('adds 7 + 7 to equal 14 + 0.4718994494805525', () => {
  expect(sum2252(7, 7)).toBe(14 + 0.4718994494805525);
});