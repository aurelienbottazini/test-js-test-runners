const sum = require('../sum');

test('adds 39 + 83 to equal 122', () => {
  expect(sum(39, 83)).toBe(122);
});