const sum = require('../sum');

test('adds 48 + 35 to equal 83', () => {
  expect(sum(48, 35)).toBe(83);
});