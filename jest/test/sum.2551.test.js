const sum = require('../sum');

test('adds 85 + 32 to equal 117', () => {
  expect(sum(85, 32)).toBe(117);
});