const sum = require('../sum');

test('adds 65 + 41 to equal 106', () => {
  expect(sum(65, 41)).toBe(106);
});