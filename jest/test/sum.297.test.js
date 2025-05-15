const sum = require('../sum');

test('adds 81 + 88 to equal 169', () => {
  expect(sum(81, 88)).toBe(169);
});