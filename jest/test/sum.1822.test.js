const sum = require('../sum');

test('adds 31 + 91 to equal 122', () => {
  expect(sum(31, 91)).toBe(122);
});