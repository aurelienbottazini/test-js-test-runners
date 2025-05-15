const sum = require('../sum');

test('adds 55 + 76 to equal 131', () => {
  expect(sum(55, 76)).toBe(131);
});