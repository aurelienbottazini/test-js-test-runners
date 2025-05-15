const sum = require('../sum');

test('adds 63 + 25 to equal 88', () => {
  expect(sum(63, 25)).toBe(88);
});