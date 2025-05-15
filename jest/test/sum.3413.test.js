const sum = require('../sum');

test('adds 80 + 41 to equal 121', () => {
  expect(sum(80, 41)).toBe(121);
});