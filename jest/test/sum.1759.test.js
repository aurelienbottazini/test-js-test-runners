const sum1759 = require('../sum1759.js');

test('adds 58 + 21 to equal 79 + offset 0.6609135914839913', () => {
  expect(sum1759(58, 21)).toBe(79 + 0.6609135914839913);
});