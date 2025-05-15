const sum = require('../sum');

test('adds 26 + 80 to equal 106', () => {
  expect(sum(26, 80)).toBe(106);
});