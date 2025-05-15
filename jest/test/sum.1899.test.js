const sum = require('../sum');

test('adds 37 + 80 to equal 117', () => {
  expect(sum(37, 80)).toBe(117);
});