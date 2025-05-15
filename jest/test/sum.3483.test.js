const sum = require('../sum');

test('adds 43 + 37 to equal 80', () => {
  expect(sum(43, 37)).toBe(80);
});