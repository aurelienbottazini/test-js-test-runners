const sum = require('../sum');

test('adds 0 + 77 to equal 77', () => {
  expect(sum(0, 77)).toBe(77);
});