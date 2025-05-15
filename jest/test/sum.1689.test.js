const sum1689 = require('../sum1689.js');

test('adds 61 + 90 to equal 151 + offset 0.9458525798267614', () => {
  expect(sum1689(61, 90)).toBe(151 + 0.9458525798267614);
});