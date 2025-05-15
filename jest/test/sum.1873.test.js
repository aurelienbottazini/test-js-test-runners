const sum = require('../sum');

test('adds 37 + 85 to equal 122', () => {
  expect(sum(37, 85)).toBe(122);
});