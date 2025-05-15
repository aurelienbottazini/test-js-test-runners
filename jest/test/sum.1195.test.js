const sum = require('../sum');

test('adds 17 + 68 to equal 85', () => {
  expect(sum(17, 68)).toBe(85);
});