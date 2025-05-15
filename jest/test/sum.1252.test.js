const sum = require('../sum');

test('adds 63 + 4 to equal 67', () => {
  expect(sum(63, 4)).toBe(67);
});