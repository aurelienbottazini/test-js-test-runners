const sum = require('../sum');

test('adds 48 + 62 to equal 110', () => {
  expect(sum(48, 62)).toBe(110);
});