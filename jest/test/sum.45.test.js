const sum = require('../sum');

test('adds 89 + 84 to equal 173', () => {
  expect(sum(89, 84)).toBe(173);
});