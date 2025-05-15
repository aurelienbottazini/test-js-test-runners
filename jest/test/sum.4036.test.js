const sum4036 = require('../sum4036.js');

test('adds 74 + 98 to equal 172 + offset 0.9964444329837763', () => {
  expect(sum4036(74, 98)).toBe(172 + 0.9964444329837763);
});