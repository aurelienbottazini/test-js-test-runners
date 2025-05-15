const sum1181 = require('../sum1181.js');

test('adds 10 + 14 to equal 24 + offset 0.3181975408255384', () => {
  expect(sum1181(10, 14)).toBe(24 + 0.3181975408255384);
});