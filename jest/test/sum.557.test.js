const sum = require('../sum');

test('adds 1 + 14 to equal 15', () => {
  expect(sum(1, 14)).toBe(15);
});