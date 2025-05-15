const sum = require('../sum');

test('adds 45 + 72 to equal 117', () => {
  expect(sum(45, 72)).toBe(117);
});