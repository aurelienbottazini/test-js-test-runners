const sum = require('../sum');

test('adds 2 + 65 to equal 67', () => {
  expect(sum(2, 65)).toBe(67);
});