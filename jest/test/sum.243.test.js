const sum = require('../sum');

test('adds 64 + 21 to equal 85', () => {
  expect(sum(64, 21)).toBe(85);
});