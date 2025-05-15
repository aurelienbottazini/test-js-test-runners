const sum = require('../sum');

test('adds 66 + 64 to equal 130', () => {
  expect(sum(66, 64)).toBe(130);
});