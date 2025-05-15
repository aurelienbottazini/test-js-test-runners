const sum828 = require('../sum828.js');

test('adds 45 + 27 to equal 72 + offset 0.38211123052306406', () => {
  expect(sum828(45, 27)).toBe(72 + 0.38211123052306406);
});