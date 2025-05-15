const sum3763 = require('../sum3763.js');

test('adds 74 + 45 to equal 119 + offset 0.6183834469009958', () => {
  expect(sum3763(74, 45)).toBe(119 + 0.6183834469009958);
});