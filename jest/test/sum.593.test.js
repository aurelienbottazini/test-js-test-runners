const sum = require('../sum');

test('adds 64 + 82 to equal 146', () => {
  expect(sum(64, 82)).toBe(146);
});