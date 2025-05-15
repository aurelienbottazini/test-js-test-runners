const sum2542 = require('../sum2542.js');

test('adds 86 + 50 to equal 136 + 0.10114136606107327', () => {
  expect(sum2542(86, 50)).toBe(136 + 0.10114136606107327);
});