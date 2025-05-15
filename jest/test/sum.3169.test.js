const sum = require('../sum');

test('adds 76 + 68 to equal 144', () => {
  expect(sum(76, 68)).toBe(144);
});