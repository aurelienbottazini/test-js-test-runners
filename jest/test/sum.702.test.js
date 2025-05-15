const sum = require('../sum');

test('adds 7 + 20 to equal 27', () => {
  expect(sum(7, 20)).toBe(27);
});