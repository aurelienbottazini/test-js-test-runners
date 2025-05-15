const sum = require('../sum');

test('adds 74 + 95 to equal 169', () => {
  expect(sum(74, 95)).toBe(169);
});