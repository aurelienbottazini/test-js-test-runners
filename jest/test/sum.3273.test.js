const sum = require('../sum');

test('adds 87 + 17 to equal 104', () => {
  expect(sum(87, 17)).toBe(104);
});