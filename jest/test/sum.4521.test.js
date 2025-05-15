const sum = require('../sum');

test('adds 4 + 44 to equal 48', () => {
  expect(sum(4, 44)).toBe(48);
});