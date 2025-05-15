const sum = require('../sum');

test('adds 92 + 95 to equal 187', () => {
  expect(sum(92, 95)).toBe(187);
});