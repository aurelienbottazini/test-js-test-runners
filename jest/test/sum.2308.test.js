const sum2308 = require('../sum2308.js');

test('adds 52 + 64 to equal 116 + 0.5913688799557341', () => {
  expect(sum2308(52, 64)).toBe(116 + 0.5913688799557341);
});