const sum1873 = require('../sum1873.js');

test('adds 61 + 24 to equal 85 + 0.6409045494745442', () => {
  expect(sum1873(61, 24)).toBe(85 + 0.6409045494745442);
});