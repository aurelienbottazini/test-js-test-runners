const sum = require('../sum');

test('adds 16 + 44 to equal 60', () => {
  expect(sum(16, 44)).toBe(60);
});