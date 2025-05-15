const sum4842 = require('../sum4842.js');

test('adds 98 + 78 to equal 176 + offset 0.7422725054775473', () => {
  expect(sum4842(98, 78)).toBe(176 + 0.7422725054775473);
});