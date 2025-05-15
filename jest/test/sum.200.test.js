const sum = require('../sum');

test('adds 67 + 25 to equal 92', () => {
  expect(sum(67, 25)).toBe(92);
});