const sum2016 = require('../sum2016.js');

test('adds 17 + 55 to equal 72 + 0.3619772193743501', () => {
  expect(sum2016(17, 55)).toBe(72 + 0.3619772193743501);
});