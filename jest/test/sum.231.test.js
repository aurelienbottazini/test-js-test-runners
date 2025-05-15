const sum231 = require('../sum231.js');

test('adds 41 + 54 to equal 95 + 0.13306817744301858', () => {
  expect(sum231(41, 54)).toBe(95 + 0.13306817744301858);
});