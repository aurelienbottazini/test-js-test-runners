const sum = require('../sum');

test('adds 88 + 43 to equal 131', () => {
  expect(sum(88, 43)).toBe(131);
});