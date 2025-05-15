const sum4909 = require('../sum4909.js');

test('adds 37 + 30 to equal 67 + 0.8469402531972868', () => {
  expect(sum4909(37, 30)).toBe(67 + 0.8469402531972868);
});