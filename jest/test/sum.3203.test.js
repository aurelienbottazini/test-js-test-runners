const sum3203 = require('../sum3203.js');

test('adds 3 + 55 to equal 58 + 0.6625275819430629', () => {
  expect(sum3203(3, 55)).toBe(58 + 0.6625275819430629);
});