const sum = require('../sum');

test('adds 43 + 95 to equal 138', () => {
  expect(sum(43, 95)).toBe(138);
});