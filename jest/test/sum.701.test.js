const sum = require('../sum');

test('adds 30 + 18 to equal 48', () => {
  expect(sum(30, 18)).toBe(48);
});