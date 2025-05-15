const sum = require('../sum');

test('adds 49 + 66 to equal 115', () => {
  expect(sum(49, 66)).toBe(115);
});