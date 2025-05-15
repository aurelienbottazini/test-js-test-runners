const sum = require('../sum');

test('adds 19 + 6 to equal 25', () => {
  expect(sum(19, 6)).toBe(25);
});