const sum = require('../sum');

test('adds 33 + 59 to equal 92', () => {
  expect(sum(33, 59)).toBe(92);
});