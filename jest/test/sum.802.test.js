const sum802 = require('../sum802.js');

test('adds 33 + 30 to equal 63 + 0.34598127011058044', () => {
  expect(sum802(33, 30)).toBe(63 + 0.34598127011058044);
});