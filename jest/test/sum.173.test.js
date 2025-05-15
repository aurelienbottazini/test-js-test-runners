const sum = require('../sum');

test('adds 97 + 3 to equal 100', () => {
  expect(sum(97, 3)).toBe(100);
});