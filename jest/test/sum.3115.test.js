const sum = require('../sum');

test('adds 37 + 23 to equal 60', () => {
  expect(sum(37, 23)).toBe(60);
});