const sum = require('../sum');

test('adds 23 + 68 to equal 91', () => {
  expect(sum(23, 68)).toBe(91);
});