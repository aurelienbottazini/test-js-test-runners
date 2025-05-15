const sum = require('../sum');

test('adds 16 + 28 to equal 44', () => {
  expect(sum(16, 28)).toBe(44);
});