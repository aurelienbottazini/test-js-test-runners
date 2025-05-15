const sum = require('../sum');

test('adds 90 + 77 to equal 167', () => {
  expect(sum(90, 77)).toBe(167);
});