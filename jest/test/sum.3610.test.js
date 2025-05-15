const sum = require('../sum');

test('adds 0 + 43 to equal 43', () => {
  expect(sum(0, 43)).toBe(43);
});