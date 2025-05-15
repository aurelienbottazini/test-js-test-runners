const sum = require('../sum');

test('adds 45 + 37 to equal 82', () => {
  expect(sum(45, 37)).toBe(82);
});