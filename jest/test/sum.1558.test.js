const sum = require('../sum');

test('adds 27 + 20 to equal 47', () => {
  expect(sum(27, 20)).toBe(47);
});