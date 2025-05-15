const sum = require('../sum');

test('adds 19 + 95 to equal 114', () => {
  expect(sum(19, 95)).toBe(114);
});