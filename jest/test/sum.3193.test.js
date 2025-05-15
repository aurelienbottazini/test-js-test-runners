const sum = require('../sum');

test('adds 32 + 90 to equal 122', () => {
  expect(sum(32, 90)).toBe(122);
});