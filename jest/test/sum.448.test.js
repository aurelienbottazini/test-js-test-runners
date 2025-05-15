const sum = require('../sum');

test('adds 81 + 92 to equal 173', () => {
  expect(sum(81, 92)).toBe(173);
});