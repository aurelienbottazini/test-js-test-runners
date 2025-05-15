const sum = require('../sum');

test('adds 18 + 49 to equal 67', () => {
  expect(sum(18, 49)).toBe(67);
});