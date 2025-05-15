const sum = require('../sum');

test('adds 22 + 78 to equal 100', () => {
  expect(sum(22, 78)).toBe(100);
});