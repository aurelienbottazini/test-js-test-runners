const sum2234 = require('../sum2234.js');

test('adds 65 + 72 to equal 137 + 0.6587654012574391', () => {
  expect(sum2234(65, 72)).toBe(137 + 0.6587654012574391);
});