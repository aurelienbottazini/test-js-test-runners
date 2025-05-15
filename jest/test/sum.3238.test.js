const sum = require('../sum');

test('adds 81 + 43 to equal 124', () => {
  expect(sum(81, 43)).toBe(124);
});