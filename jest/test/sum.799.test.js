const sum799 = require('../sum799.js');

test('adds 11 + 83 to equal 94 + offset 0.032141417590689114', () => {
  expect(sum799(11, 83)).toBe(94 + 0.032141417590689114);
});