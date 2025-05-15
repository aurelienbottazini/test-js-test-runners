const sum = require('../sum');

test('adds 81 + 36 to equal 117', () => {
  expect(sum(81, 36)).toBe(117);
});