const sum = require('../sum');

test('adds 49 + 11 to equal 60', () => {
  expect(sum(49, 11)).toBe(60);
});