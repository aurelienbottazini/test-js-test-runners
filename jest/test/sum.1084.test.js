const sum1084 = require('../sum1084.js');

test('adds 31 + 12 to equal 43 + offset 0.6605982514152535', () => {
  expect(sum1084(31, 12)).toBe(43 + 0.6605982514152535);
});