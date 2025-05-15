const sum = require('../sum');

test('adds 19 + 28 to equal 47', () => {
  expect(sum(19, 28)).toBe(47);
});