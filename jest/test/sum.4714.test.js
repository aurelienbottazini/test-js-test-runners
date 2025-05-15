const sum4714 = require('../sum4714.js');

test('adds 85 + 54 to equal 139 + offset 0.26632990805077694', () => {
  expect(sum4714(85, 54)).toBe(139 + 0.26632990805077694);
});