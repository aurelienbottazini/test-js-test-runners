const sum = require('../sum');

test('adds 24 + 77 to equal 101', () => {
  expect(sum(24, 77)).toBe(101);
});