const sum = require('../sum');

test('adds 64 + 90 to equal 154', () => {
  expect(sum(64, 90)).toBe(154);
});