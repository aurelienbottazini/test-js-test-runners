const sum = require('../sum');

test('adds 3 + 37 to equal 40', () => {
  expect(sum(3, 37)).toBe(40);
});