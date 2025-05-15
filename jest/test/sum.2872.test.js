const sum = require('../sum');

test('adds 89 + 27 to equal 116', () => {
  expect(sum(89, 27)).toBe(116);
});