const sum = require('../sum');

test('adds 33 + 77 to equal 110', () => {
  expect(sum(33, 77)).toBe(110);
});