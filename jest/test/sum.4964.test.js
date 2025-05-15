const sum = require('../sum');

test('adds 53 + 37 to equal 90', () => {
  expect(sum(53, 37)).toBe(90);
});