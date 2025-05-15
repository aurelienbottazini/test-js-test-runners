const sum = require('../sum');

test('adds 68 + 23 to equal 91', () => {
  expect(sum(68, 23)).toBe(91);
});