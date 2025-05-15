const sum = require('../sum');

test('adds 67 + 64 to equal 131', () => {
  expect(sum(67, 64)).toBe(131);
});