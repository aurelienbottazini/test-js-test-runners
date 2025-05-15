const sum = require('../sum');

test('adds 67 + 14 to equal 81', () => {
  expect(sum(67, 14)).toBe(81);
});