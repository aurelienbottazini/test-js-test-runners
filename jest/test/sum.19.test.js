const sum = require('../sum');

test('adds 34 + 77 to equal 111', () => {
  expect(sum(34, 77)).toBe(111);
});