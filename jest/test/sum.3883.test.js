const sum = require('../sum');

test('adds 3 + 22 to equal 25', () => {
  expect(sum(3, 22)).toBe(25);
});