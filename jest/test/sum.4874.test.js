const sum4874 = require('../sum4874.js');

test('adds 85 + 82 to equal 167 + offset 0.8516609472387738', () => {
  expect(sum4874(85, 82)).toBe(167 + 0.8516609472387738);
});