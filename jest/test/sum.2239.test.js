const sum = require('../sum');

test('adds 92 + 81 to equal 173', () => {
  expect(sum(92, 81)).toBe(173);
});