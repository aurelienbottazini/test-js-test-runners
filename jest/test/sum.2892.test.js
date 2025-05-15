const sum = require('../sum');

test('adds 53 + 11 to equal 64', () => {
  expect(sum(53, 11)).toBe(64);
});