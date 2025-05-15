const sum = require('../sum');

test('adds 6 + 39 to equal 45', () => {
  expect(sum(6, 39)).toBe(45);
});