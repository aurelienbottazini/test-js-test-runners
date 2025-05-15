const sum = require('../sum');

test('adds 38 + 22 to equal 60', () => {
  expect(sum(38, 22)).toBe(60);
});