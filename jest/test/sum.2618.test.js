const sum2618 = require('../sum2618.js');

test('adds 56 + 98 to equal 154 + offset 0.5423679239413112', () => {
  expect(sum2618(56, 98)).toBe(154 + 0.5423679239413112);
});