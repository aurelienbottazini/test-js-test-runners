const sum = require('../sum');

test('adds 62 + 37 to equal 99', () => {
  expect(sum(62, 37)).toBe(99);
});