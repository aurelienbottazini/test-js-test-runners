const sum = require('../sum');

test('adds 27 + 25 to equal 52', () => {
  expect(sum(27, 25)).toBe(52);
});