const sum = require('../sum');

test('adds 4 + 27 to equal 31', () => {
  expect(sum(4, 27)).toBe(31);
});