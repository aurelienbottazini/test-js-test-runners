const sum = require('../sum');

test('adds 57 + 81 to equal 138', () => {
  expect(sum(57, 81)).toBe(138);
});