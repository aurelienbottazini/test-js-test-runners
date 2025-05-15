const sum = require('../sum');

test('adds 94 + 59 to equal 153', () => {
  expect(sum(94, 59)).toBe(153);
});