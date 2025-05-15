const sum = require('../sum');

test('adds 94 + 81 to equal 175', () => {
  expect(sum(94, 81)).toBe(175);
});