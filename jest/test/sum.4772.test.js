const sum4772 = require('../sum4772.js');

test('adds 58 + 86 to equal 144 + offset 0.35117937014244593', () => {
  expect(sum4772(58, 86)).toBe(144 + 0.35117937014244593);
});