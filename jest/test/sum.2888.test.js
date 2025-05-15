const sum = require('../sum');

test('adds 78 + 22 to equal 100', () => {
  expect(sum(78, 22)).toBe(100);
});