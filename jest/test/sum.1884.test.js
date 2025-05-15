const sum = require('../sum');

test('adds 88 + 95 to equal 183', () => {
  expect(sum(88, 95)).toBe(183);
});