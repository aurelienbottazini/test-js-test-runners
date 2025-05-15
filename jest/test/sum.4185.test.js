const sum = require('../sum');

test('adds 66 + 49 to equal 115', () => {
  expect(sum(66, 49)).toBe(115);
});