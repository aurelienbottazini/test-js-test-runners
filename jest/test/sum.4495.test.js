const sum = require('../sum');

test('adds 45 + 77 to equal 122', () => {
  expect(sum(45, 77)).toBe(122);
});