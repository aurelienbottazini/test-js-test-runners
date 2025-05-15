const sum = require('../sum');

test('adds 65 + 96 to equal 161', () => {
  expect(sum(65, 96)).toBe(161);
});