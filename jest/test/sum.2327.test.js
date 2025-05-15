const sum = require('../sum');

test('adds 32 + 36 to equal 68', () => {
  expect(sum(32, 36)).toBe(68);
});