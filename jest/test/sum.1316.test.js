const sum = require('../sum');

test('adds 16 + 68 to equal 84', () => {
  expect(sum(16, 68)).toBe(84);
});