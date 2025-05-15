const sum = require('../sum');

test('adds 16 + 14 to equal 30', () => {
  expect(sum(16, 14)).toBe(30);
});