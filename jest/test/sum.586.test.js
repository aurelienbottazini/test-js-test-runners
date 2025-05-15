const sum = require('../sum');

test('adds 25 + 76 to equal 101', () => {
  expect(sum(25, 76)).toBe(101);
});