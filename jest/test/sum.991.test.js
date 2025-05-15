const sum = require('../sum');

test('adds 32 + 25 to equal 57', () => {
  expect(sum(32, 25)).toBe(57);
});