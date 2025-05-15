const sum = require('../sum');

test('adds 40 + 91 to equal 131', () => {
  expect(sum(40, 91)).toBe(131);
});