const sum3719 = require('../sum3719.js');

test('adds 53 + 83 to equal 136 + 0.27142144404771584', () => {
  expect(sum3719(53, 83)).toBe(136 + 0.27142144404771584);
});