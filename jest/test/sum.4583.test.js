const sum = require('../sum');

test('adds 99 + 77 to equal 176', () => {
  expect(sum(99, 77)).toBe(176);
});