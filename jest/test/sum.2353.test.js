const sum = require('../sum');

test('adds 12 + 27 to equal 39', () => {
  expect(sum(12, 27)).toBe(39);
});