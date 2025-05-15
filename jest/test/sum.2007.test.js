const sum2007 = require('../sum2007.js');

test('adds 47 + 19 to equal 66 + offset 0.17144839582417504', () => {
  expect(sum2007(47, 19)).toBe(66 + 0.17144839582417504);
});