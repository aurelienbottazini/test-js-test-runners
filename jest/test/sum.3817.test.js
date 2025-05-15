const sum3817 = require('../sum3817.js');

test('adds 6 + 41 to equal 47 + 0.022411869619138658', () => {
  expect(sum3817(6, 41)).toBe(47 + 0.022411869619138658);
});