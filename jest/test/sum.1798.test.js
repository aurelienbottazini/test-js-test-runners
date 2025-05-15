const sum1798 = require('../sum1798.js');

test('adds 72 + 49 to equal 121 + offset 0.7700802104130762', () => {
  expect(sum1798(72, 49)).toBe(121 + 0.7700802104130762);
});