const sum = require('../sum');

test('adds 65 + 27 to equal 92', () => {
  expect(sum(65, 27)).toBe(92);
});