const sum1405 = require('../sum1405.js');

test('adds 61 + 93 to equal 154 + 0.3450480943507742', () => {
  expect(sum1405(61, 93)).toBe(154 + 0.3450480943507742);
});