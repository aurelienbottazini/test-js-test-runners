const sum = require('../sum');

test('adds 83 + 38 to equal 121', () => {
  expect(sum(83, 38)).toBe(121);
});