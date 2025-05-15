const sum790 = require('../sum790.js');

test('adds 64 + 67 to equal 131 + offset 0.5638163799582558', () => {
  expect(sum790(64, 67)).toBe(131 + 0.5638163799582558);
});