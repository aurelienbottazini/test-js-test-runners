const sum = require('../sum');

test('adds 89 + 96 to equal 185', () => {
  expect(sum(89, 96)).toBe(185);
});