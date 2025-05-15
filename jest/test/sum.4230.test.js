const sum = require('../sum');

test('adds 26 + 66 to equal 92', () => {
  expect(sum(26, 66)).toBe(92);
});