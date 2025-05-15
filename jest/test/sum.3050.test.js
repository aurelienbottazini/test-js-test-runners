const sum = require('../sum');

test('adds 33 + 15 to equal 48', () => {
  expect(sum(33, 15)).toBe(48);
});