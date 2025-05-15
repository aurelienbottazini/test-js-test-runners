const sum = require('../sum');

test('adds 96 + 44 to equal 140', () => {
  expect(sum(96, 44)).toBe(140);
});