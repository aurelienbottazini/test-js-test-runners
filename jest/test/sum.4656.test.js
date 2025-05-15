const sum = require('../sum');

test('adds 0 + 37 to equal 37', () => {
  expect(sum(0, 37)).toBe(37);
});