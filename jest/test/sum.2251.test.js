const sum = require('../sum');

test('adds 89 + 43 to equal 132', () => {
  expect(sum(89, 43)).toBe(132);
});