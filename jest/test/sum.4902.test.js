const sum = require('../sum');

test('adds 48 + 82 to equal 130', () => {
  expect(sum(48, 82)).toBe(130);
});