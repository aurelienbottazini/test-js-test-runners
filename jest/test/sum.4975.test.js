const sum4975 = require('../sum4975.js');

test('adds 56 + 77 to equal 133 + offset 0.33481764964070293', () => {
  expect(sum4975(56, 77)).toBe(133 + 0.33481764964070293);
});