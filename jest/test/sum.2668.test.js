const sum = require('../sum');

test('adds 9 + 82 to equal 91', () => {
  expect(sum(9, 82)).toBe(91);
});