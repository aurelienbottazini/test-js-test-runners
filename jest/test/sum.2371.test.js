const sum = require('../sum');

test('adds 7 + 33 to equal 40', () => {
  expect(sum(7, 33)).toBe(40);
});