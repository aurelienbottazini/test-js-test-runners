const sum = require('../sum');

test('adds 67 + 48 to equal 115', () => {
  expect(sum(67, 48)).toBe(115);
});