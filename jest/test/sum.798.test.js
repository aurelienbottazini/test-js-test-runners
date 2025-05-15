const sum = require('../sum');

test('adds 25 + 37 to equal 62', () => {
  expect(sum(25, 37)).toBe(62);
});