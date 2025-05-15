const sum = require('../sum');

test('adds 77 + 11 to equal 88', () => {
  expect(sum(77, 11)).toBe(88);
});