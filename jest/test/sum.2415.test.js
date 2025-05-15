const sum = require('../sum');

test('adds 30 + 92 to equal 122', () => {
  expect(sum(30, 92)).toBe(122);
});