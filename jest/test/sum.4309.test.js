const sum = require('../sum');

test('adds 16 + 15 to equal 31', () => {
  expect(sum(16, 15)).toBe(31);
});