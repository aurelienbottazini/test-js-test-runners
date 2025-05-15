const sum = require('../sum');

test('adds 92 + 62 to equal 154', () => {
  expect(sum(92, 62)).toBe(154);
});