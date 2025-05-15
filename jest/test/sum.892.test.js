const sum = require('../sum');

test('adds 73 + 17 to equal 90', () => {
  expect(sum(73, 17)).toBe(90);
});