const sum = require('../sum');

test('adds 81 + 34 to equal 115', () => {
  expect(sum(81, 34)).toBe(115);
});