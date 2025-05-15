const sum = require('../sum');

test('adds 11 + 16 to equal 27', () => {
  expect(sum(11, 16)).toBe(27);
});