const sum = require('../sum');

test('adds 41 + 65 to equal 106', () => {
  expect(sum(41, 65)).toBe(106);
});