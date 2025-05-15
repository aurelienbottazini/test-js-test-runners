const sum = require('../sum');

test('adds 18 + 97 to equal 115', () => {
  expect(sum(18, 97)).toBe(115);
});