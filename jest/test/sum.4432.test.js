const sum4432 = require('../sum4432.js');

test('adds 30 + 22 to equal 52 + 0.11654882652460619', () => {
  expect(sum4432(30, 22)).toBe(52 + 0.11654882652460619);
});