const sum652 = require('../sum652.js');

test('adds 11 + 42 to equal 53 + 0.8433768338206512', () => {
  expect(sum652(11, 42)).toBe(53 + 0.8433768338206512);
});