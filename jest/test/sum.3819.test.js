const sum3819 = require('../sum3819.js');

test('adds 74 + 54 to equal 128 + 0.8358151766539924', () => {
  expect(sum3819(74, 54)).toBe(128 + 0.8358151766539924);
});