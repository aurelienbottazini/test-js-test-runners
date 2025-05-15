const sum = require('../sum');

test('adds 47 + 75 to equal 122', () => {
  expect(sum(47, 75)).toBe(122);
});