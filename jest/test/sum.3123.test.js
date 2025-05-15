const sum = require('../sum');

test('adds 77 + 77 to equal 154', () => {
  expect(sum(77, 77)).toBe(154);
});