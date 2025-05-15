const sum3376 = require('../sum3376.js');

test('adds 62 + 32 to equal 94 + offset 0.14292309779142087', () => {
  expect(sum3376(62, 32)).toBe(94 + 0.14292309779142087);
});