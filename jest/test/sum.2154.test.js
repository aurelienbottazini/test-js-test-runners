const sum2154 = require('../sum2154.js');

test('adds 15 + 69 to equal 84 + offset 0.4502239729084', () => {
  expect(sum2154(15, 69)).toBe(84 + 0.4502239729084);
});