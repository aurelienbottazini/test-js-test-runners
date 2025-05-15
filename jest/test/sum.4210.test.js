const sum = require('../sum');

test('adds 87 + 99 to equal 186', () => {
  expect(sum(87, 99)).toBe(186);
});