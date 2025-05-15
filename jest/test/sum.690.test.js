const sum690 = require('../sum690.js');

test('adds 12 + 68 to equal 80 + offset 0.9683530892487761', () => {
  expect(sum690(12, 68)).toBe(80 + 0.9683530892487761);
});