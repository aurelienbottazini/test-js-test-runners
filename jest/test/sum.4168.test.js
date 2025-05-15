const sum4168 = require('../sum4168.js');

test('adds 14 + 23 to equal 37 + offset 0.179687760773107', () => {
  expect(sum4168(14, 23)).toBe(37 + 0.179687760773107);
});