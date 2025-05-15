const sum = require('../sum');

test('adds 94 + 79 to equal 173', () => {
  expect(sum(94, 79)).toBe(173);
});