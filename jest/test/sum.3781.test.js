const sum = require('../sum');

test('adds 61 + 61 to equal 122', () => {
  expect(sum(61, 61)).toBe(122);
});