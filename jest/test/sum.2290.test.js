const sum = require('../sum');

test('adds 81 + 72 to equal 153', () => {
  expect(sum(81, 72)).toBe(153);
});