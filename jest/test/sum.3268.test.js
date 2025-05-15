const sum3268 = require('../sum3268.js');

test('adds 33 + 10 to equal 43 + offset 0.8629116507578967', () => {
  expect(sum3268(33, 10)).toBe(43 + 0.8629116507578967);
});