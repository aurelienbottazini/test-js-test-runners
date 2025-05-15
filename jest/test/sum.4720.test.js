const sum = require('../sum');

test('adds 18 + 7 to equal 25', () => {
  expect(sum(18, 7)).toBe(25);
});