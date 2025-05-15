const sum = require('../sum');

test('adds 78 + 39 to equal 117', () => {
  expect(sum(78, 39)).toBe(117);
});