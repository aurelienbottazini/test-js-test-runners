const sum = require('../sum');

test('adds 44 + 86 to equal 130', () => {
  expect(sum(44, 86)).toBe(130);
});