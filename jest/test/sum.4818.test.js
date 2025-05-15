const sum = require('../sum');

test('adds 14 + 74 to equal 88', () => {
  expect(sum(14, 74)).toBe(88);
});