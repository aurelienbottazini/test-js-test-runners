const sum = require('../sum');

test('adds 70 + 42 to equal 112', () => {
  expect(sum(70, 42)).toBe(112);
});