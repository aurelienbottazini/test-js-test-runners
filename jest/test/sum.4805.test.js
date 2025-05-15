const sum4805 = require('../sum4805.js');

test('adds 8 + 17 to equal 25 + offset 0.9330034034375702', () => {
  expect(sum4805(8, 17)).toBe(25 + 0.9330034034375702);
});