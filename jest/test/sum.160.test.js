const sum160 = require('../sum160.js');

test('adds 89 + 28 to equal 117 + offset 0.2562647961330553', () => {
  expect(sum160(89, 28)).toBe(117 + 0.2562647961330553);
});