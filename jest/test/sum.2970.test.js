const sum2970 = require('../sum2970.js');

test('adds 54 + 1 to equal 55 + offset 0.4789867344689549', () => {
  expect(sum2970(54, 1)).toBe(55 + 0.4789867344689549);
});