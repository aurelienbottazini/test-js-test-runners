const sum = require('../sum');

test('adds 2 + 75 to equal 77', () => {
  expect(sum(2, 75)).toBe(77);
});