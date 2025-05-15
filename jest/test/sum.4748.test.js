const sum = require('../sum');

test('adds 42 + 36 to equal 78', () => {
  expect(sum(42, 36)).toBe(78);
});