const sum4310 = require('../sum4310.js');

test('adds 98 + 33 to equal 131 + offset 0.28669081726693457', () => {
  expect(sum4310(98, 33)).toBe(131 + 0.28669081726693457);
});