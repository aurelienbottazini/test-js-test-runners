const sum = require('../sum');

test('adds 56 + 65 to equal 121', () => {
  expect(sum(56, 65)).toBe(121);
});