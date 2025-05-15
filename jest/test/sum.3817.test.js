const sum = require('../sum');

test('adds 10 + 96 to equal 106', () => {
  expect(sum(10, 96)).toBe(106);
});