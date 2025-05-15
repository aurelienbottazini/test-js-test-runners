const sum = require('../sum');

test('adds 20 + 7 to equal 27', () => {
  expect(sum(20, 7)).toBe(27);
});