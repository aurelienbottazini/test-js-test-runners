const sum = require('../sum');

test('adds 5 + 8 to equal 13', () => {
  expect(sum(5, 8)).toBe(13);
});