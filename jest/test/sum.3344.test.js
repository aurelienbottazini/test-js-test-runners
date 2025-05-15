const sum = require('../sum');

test('adds 72 + 66 to equal 138', () => {
  expect(sum(72, 66)).toBe(138);
});