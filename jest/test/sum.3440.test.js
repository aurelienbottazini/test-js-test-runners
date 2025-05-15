const sum = require('../sum');

test('adds 26 + 74 to equal 100', () => {
  expect(sum(26, 74)).toBe(100);
});