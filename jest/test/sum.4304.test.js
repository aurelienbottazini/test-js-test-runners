const sum = require('../sum');

test('adds 98 + 43 to equal 141', () => {
  expect(sum(98, 43)).toBe(141);
});