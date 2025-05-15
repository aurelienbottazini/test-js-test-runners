const sum = require('../sum');

test('adds 90 + 41 to equal 131', () => {
  expect(sum(90, 41)).toBe(131);
});