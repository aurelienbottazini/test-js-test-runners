const sum1503 = require('../sum1503.js');

test('adds 35 + 62 to equal 97 + offset 0.4618840871742528', () => {
  expect(sum1503(35, 62)).toBe(97 + 0.4618840871742528);
});