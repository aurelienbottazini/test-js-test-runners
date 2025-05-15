const sum = require('../sum');

test('adds 11 + 83 to equal 94', () => {
  expect(sum(11, 83)).toBe(94);
});