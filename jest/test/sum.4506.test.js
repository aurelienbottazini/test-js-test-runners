const sum = require('../sum');

test('adds 59 + 26 to equal 85', () => {
  expect(sum(59, 26)).toBe(85);
});