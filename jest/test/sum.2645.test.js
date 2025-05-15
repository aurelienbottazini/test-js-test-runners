const sum = require('../sum');

test('adds 67 + 55 to equal 122', () => {
  expect(sum(67, 55)).toBe(122);
});