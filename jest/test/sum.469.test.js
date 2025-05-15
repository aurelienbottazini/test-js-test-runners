const sum = require('../sum');

test('adds 39 + 82 to equal 121', () => {
  expect(sum(39, 82)).toBe(121);
});