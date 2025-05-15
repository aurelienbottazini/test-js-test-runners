const sum = require('../sum');

test('adds 0 + 17 to equal 17', () => {
  expect(sum(0, 17)).toBe(17);
});