const sum = require('../sum');

test('adds 4 + 20 to equal 24', () => {
  expect(sum(4, 20)).toBe(24);
});