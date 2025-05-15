const sum = require('../sum');

test('adds 83 + 70 to equal 153', () => {
  expect(sum(83, 70)).toBe(153);
});