const sum = require('../sum');

test('adds 45 + 83 to equal 128', () => {
  expect(sum(45, 83)).toBe(128);
});