const sum = require('../sum');

test('adds 33 + 7 to equal 40', () => {
  expect(sum(33, 7)).toBe(40);
});