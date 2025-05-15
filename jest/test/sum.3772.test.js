const sum3772 = require('../sum3772.js');

test('adds 88 + 10 to equal 98 + offset 0.17264101950373556', () => {
  expect(sum3772(88, 10)).toBe(98 + 0.17264101950373556);
});