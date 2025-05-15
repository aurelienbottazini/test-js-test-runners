const sum = require('../sum');

test('adds 22 + 84 to equal 106', () => {
  expect(sum(22, 84)).toBe(106);
});