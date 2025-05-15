const sum = require('../sum');

test('adds 27 + 0 to equal 27', () => {
  expect(sum(27, 0)).toBe(27);
});