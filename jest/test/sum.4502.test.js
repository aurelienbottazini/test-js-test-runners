const sum = require('../sum');

test('adds 79 + 65 to equal 144', () => {
  expect(sum(79, 65)).toBe(144);
});