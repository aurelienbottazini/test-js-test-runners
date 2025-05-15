const sum = require('../sum');

test('adds 29 + 16 to equal 45', () => {
  expect(sum(29, 16)).toBe(45);
});