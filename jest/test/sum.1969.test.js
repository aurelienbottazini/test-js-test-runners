const sum = require('../sum');

test('adds 13 + 37 to equal 50', () => {
  expect(sum(13, 37)).toBe(50);
});