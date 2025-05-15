const sum = require('../sum');

test('adds 33 + 14 to equal 47', () => {
  expect(sum(33, 14)).toBe(47);
});