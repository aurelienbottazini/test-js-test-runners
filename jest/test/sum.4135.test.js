const sum = require('../sum');

test('adds 67 + 77 to equal 144', () => {
  expect(sum(67, 77)).toBe(144);
});