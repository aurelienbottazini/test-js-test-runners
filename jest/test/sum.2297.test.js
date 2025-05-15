const sum2297 = require('../sum2297.js');

test('adds 3 + 46 to equal 49 + offset 0.5026279675010183', () => {
  expect(sum2297(3, 46)).toBe(49 + 0.5026279675010183);
});