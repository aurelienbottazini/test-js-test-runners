const sum = require('../sum');

test('adds 45 + 0 to equal 45', () => {
  expect(sum(45, 0)).toBe(45);
});