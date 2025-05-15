const sum = require('../sum');

test('adds 66 + 65 to equal 131', () => {
  expect(sum(66, 65)).toBe(131);
});