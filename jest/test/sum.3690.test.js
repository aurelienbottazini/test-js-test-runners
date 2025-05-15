const sum = require('../sum');

test('adds 69 + 50 to equal 119', () => {
  expect(sum(69, 50)).toBe(119);
});