const sum = require('../sum');

test('adds 33 + 17 to equal 50', () => {
  expect(sum(33, 17)).toBe(50);
});