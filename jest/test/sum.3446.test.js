const sum = require('../sum');

test('adds 82 + 64 to equal 146', () => {
  expect(sum(82, 64)).toBe(146);
});