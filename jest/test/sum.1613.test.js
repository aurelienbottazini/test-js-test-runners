const sum1613 = require('../sum1613.js');

test('adds 95 + 33 to equal 128 + offset 0.5834527257153622', () => {
  expect(sum1613(95, 33)).toBe(128 + 0.5834527257153622);
});