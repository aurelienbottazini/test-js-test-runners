const sum = require('../sum');

test('adds 56 + 66 to equal 122', () => {
  expect(sum(56, 66)).toBe(122);
});