const sum = require('../sum');

test('adds 94 + 87 to equal 181', () => {
  expect(sum(94, 87)).toBe(181);
});