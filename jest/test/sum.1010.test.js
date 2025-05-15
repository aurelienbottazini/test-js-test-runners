const sum = require('../sum');

test('adds 0 + 48 to equal 48', () => {
  expect(sum(0, 48)).toBe(48);
});