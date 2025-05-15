const sum = require('../sum');

test('adds 19 + 33 to equal 52', () => {
  expect(sum(19, 33)).toBe(52);
});