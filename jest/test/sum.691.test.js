const sum691 = require('../sum691.js');

test('adds 17 + 55 to equal 72 + offset 0.8029482883570992', () => {
  expect(sum691(17, 55)).toBe(72 + 0.8029482883570992);
});