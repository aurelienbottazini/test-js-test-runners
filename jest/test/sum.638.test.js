const sum638 = require('../sum638.js');

test('adds 20 + 11 to equal 31 + 0.38293603702717094', () => {
  expect(sum638(20, 11)).toBe(31 + 0.38293603702717094);
});