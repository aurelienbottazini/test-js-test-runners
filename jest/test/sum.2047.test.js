const sum2047 = require('../sum2047.js');

test('adds 63 + 92 to equal 155 + 0.2741416743812697', () => {
  expect(sum2047(63, 92)).toBe(155 + 0.2741416743812697);
});