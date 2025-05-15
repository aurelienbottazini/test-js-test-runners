const sum = require('../sum');

test('adds 87 + 86 to equal 173', () => {
  expect(sum(87, 86)).toBe(173);
});