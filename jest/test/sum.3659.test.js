const sum = require('../sum');

test('adds 12 + 60 to equal 72', () => {
  expect(sum(12, 60)).toBe(72);
});