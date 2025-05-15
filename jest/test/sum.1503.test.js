const sum = require('../sum');

test('adds 56 + 88 to equal 144', () => {
  expect(sum(56, 88)).toBe(144);
});