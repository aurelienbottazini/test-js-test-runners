const sum4081 = require('../sum4081.js');

test('adds 18 + 92 to equal 110 + offset 0.4074242951750888', () => {
  expect(sum4081(18, 92)).toBe(110 + 0.4074242951750888);
});