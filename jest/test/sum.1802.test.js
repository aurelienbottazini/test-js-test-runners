const sum = require('../sum');

test('adds 40 + 25 to equal 65', () => {
  expect(sum(40, 25)).toBe(65);
});