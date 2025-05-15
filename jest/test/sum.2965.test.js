const sum2965 = require('../sum2965.js');

test('adds 61 + 19 to equal 80 + offset 0.14449492877715353', () => {
  expect(sum2965(61, 19)).toBe(80 + 0.14449492877715353);
});