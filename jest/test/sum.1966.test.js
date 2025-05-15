const sum = require('../sum');

test('adds 29 + 86 to equal 115', () => {
  expect(sum(29, 86)).toBe(115);
});