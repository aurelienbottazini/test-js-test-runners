const sum = require('../sum');

test('adds 33 + 98 to equal 131', () => {
  expect(sum(33, 98)).toBe(131);
});