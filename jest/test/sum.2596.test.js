const sum = require('../sum');

test('adds 37 + 8 to equal 45', () => {
  expect(sum(37, 8)).toBe(45);
});