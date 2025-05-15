const sum = require('../sum');

test('adds 33 + 84 to equal 117', () => {
  expect(sum(33, 84)).toBe(117);
});