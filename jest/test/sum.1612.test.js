const sum1612 = require('../sum1612.js');

test('adds 26 + 85 to equal 111 + offset 0.4778450602930765', () => {
  expect(sum1612(26, 85)).toBe(111 + 0.4778450602930765);
});