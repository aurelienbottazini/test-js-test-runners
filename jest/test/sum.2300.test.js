const sum = require('../sum');

test('adds 71 + 17 to equal 88', () => {
  expect(sum(71, 17)).toBe(88);
});