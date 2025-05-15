const sum = require('../sum');

test('adds 49 + 70 to equal 119', () => {
  expect(sum(49, 70)).toBe(119);
});