const sum = require('../sum');

test('adds 65 + 52 to equal 117', () => {
  expect(sum(65, 52)).toBe(117);
});