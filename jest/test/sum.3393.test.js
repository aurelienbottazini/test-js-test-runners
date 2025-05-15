const sum = require('../sum');

test('adds 17 + 83 to equal 100', () => {
  expect(sum(17, 83)).toBe(100);
});