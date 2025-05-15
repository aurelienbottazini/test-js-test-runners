const sum = require('../sum');

test('adds 88 + 85 to equal 173', () => {
  expect(sum(88, 85)).toBe(173);
});