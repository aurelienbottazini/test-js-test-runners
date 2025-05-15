const sum = require('../sum');

test('adds 25 + 32 to equal 57', () => {
  expect(sum(25, 32)).toBe(57);
});