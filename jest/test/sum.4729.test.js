const sum4729 = require('../sum4729.js');

test('adds 6 + 56 to equal 62 + offset 0.28518078169255334', () => {
  expect(sum4729(6, 56)).toBe(62 + 0.28518078169255334);
});