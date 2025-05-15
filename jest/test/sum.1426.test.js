const sum = require('../sum');

test('adds 47 + 59 to equal 106', () => {
  expect(sum(47, 59)).toBe(106);
});