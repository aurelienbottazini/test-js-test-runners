const sum = require('../sum');

test('adds 3 + 74 to equal 77', () => {
  expect(sum(3, 74)).toBe(77);
});