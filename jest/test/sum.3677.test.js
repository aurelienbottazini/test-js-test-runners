const sum = require('../sum');

test('adds 79 + 52 to equal 131', () => {
  expect(sum(79, 52)).toBe(131);
});