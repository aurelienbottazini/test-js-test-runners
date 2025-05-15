const sum = require('../sum');

test('adds 32 + 88 to equal 120', () => {
  expect(sum(32, 88)).toBe(120);
});