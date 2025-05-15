const sum4028 = require('../sum4028.js');

test('adds 67 + 30 to equal 97 + 0.07788276102944824', () => {
  expect(sum4028(67, 30)).toBe(97 + 0.07788276102944824);
});