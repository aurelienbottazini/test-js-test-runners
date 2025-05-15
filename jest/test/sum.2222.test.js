const sum2222 = require('../sum2222.js');

test('adds 43 + 92 to equal 135 + 0.42336510825708384', () => {
  expect(sum2222(43, 92)).toBe(135 + 0.42336510825708384);
});