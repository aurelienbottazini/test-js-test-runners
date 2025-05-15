const sum = require('../sum');

test('adds 58 + 64 to equal 122', () => {
  expect(sum(58, 64)).toBe(122);
});