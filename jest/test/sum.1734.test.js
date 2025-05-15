const sum = require('../sum');

test('adds 2 + 13 to equal 15', () => {
  expect(sum(2, 13)).toBe(15);
});