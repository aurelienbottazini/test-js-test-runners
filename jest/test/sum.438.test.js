const sum = require('../sum');

test('adds 65 + 85 to equal 150', () => {
  expect(sum(65, 85)).toBe(150);
});