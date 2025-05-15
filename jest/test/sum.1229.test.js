const sum = require('../sum');

test('adds 89 + 87 to equal 176', () => {
  expect(sum(89, 87)).toBe(176);
});