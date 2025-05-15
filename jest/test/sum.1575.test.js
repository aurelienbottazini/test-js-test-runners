const sum = require('../sum');

test('adds 15 + 10 to equal 25', () => {
  expect(sum(15, 10)).toBe(25);
});