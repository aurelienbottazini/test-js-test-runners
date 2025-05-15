const sum = require('../sum');

test('adds 26 + 96 to equal 122', () => {
  expect(sum(26, 96)).toBe(122);
});