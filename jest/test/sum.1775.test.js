const sum = require('../sum');

test('adds 29 + 43 to equal 72', () => {
  expect(sum(29, 43)).toBe(72);
});