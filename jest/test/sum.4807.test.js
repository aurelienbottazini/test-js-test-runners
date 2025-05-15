const sum4807 = require('../sum4807.js');

test('adds 47 + 56 to equal 103 + 0.9034341633145107', () => {
  expect(sum4807(47, 56)).toBe(103 + 0.9034341633145107);
});