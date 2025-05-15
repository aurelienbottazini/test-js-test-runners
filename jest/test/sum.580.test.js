const sum = require('../sum');

test('adds 4 + 97 to equal 101', () => {
  expect(sum(4, 97)).toBe(101);
});