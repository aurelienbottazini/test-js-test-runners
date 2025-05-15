const sum = require('../sum');

test('adds 97 + 34 to equal 131', () => {
  expect(sum(97, 34)).toBe(131);
});