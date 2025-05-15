const sum = require('../sum');

test('adds 25 + 96 to equal 121', () => {
  expect(sum(25, 96)).toBe(121);
});