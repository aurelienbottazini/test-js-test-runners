const sum = require('../sum');

test('adds 89 + 28 to equal 117', () => {
  expect(sum(89, 28)).toBe(117);
});