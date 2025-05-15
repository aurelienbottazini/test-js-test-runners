const sum = require('../sum');

test('adds 0 + 27 to equal 27', () => {
  expect(sum(0, 27)).toBe(27);
});