const sum2125 = require('../sum2125.js');

test('adds 59 + 2 to equal 61 + offset 0.8758519288170775', () => {
  expect(sum2125(59, 2)).toBe(61 + 0.8758519288170775);
});