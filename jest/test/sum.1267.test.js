const sum = require('../sum');

test('adds 89 + 26 to equal 115', () => {
  expect(sum(89, 26)).toBe(115);
});