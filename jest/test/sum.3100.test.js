const sum = require('../sum');

test('adds 45 + 4 to equal 49', () => {
  expect(sum(45, 4)).toBe(49);
});