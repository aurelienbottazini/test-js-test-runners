const sum = require('../sum');

test('adds 37 + 64 to equal 101', () => {
  expect(sum(37, 64)).toBe(101);
});