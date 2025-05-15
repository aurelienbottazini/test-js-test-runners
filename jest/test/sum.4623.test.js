const sum = require('../sum');

test('adds 53 + 4 to equal 57', () => {
  expect(sum(53, 4)).toBe(57);
});