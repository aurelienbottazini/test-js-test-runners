const sum = require('../sum');

test('adds 9 + 11 to equal 20', () => {
  expect(sum(9, 11)).toBe(20);
});