const sum2802 = require('../sum2802.js');

test('adds 44 + 73 to equal 117 + 0.9682110838162618', () => {
  expect(sum2802(44, 73)).toBe(117 + 0.9682110838162618);
});