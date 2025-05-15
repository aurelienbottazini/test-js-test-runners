const sum = require('../sum');

test('adds 57 + 35 to equal 92', () => {
  expect(sum(57, 35)).toBe(92);
});