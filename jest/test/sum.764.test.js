const sum = require('../sum');

test('adds 50 + 81 to equal 131', () => {
  expect(sum(50, 81)).toBe(131);
});