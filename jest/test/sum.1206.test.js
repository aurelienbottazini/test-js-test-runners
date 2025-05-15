const sum1206 = require('../sum1206.js');

test('adds 11 + 80 to equal 91 + offset 0.3892231822945159', () => {
  expect(sum1206(11, 80)).toBe(91 + 0.3892231822945159);
});