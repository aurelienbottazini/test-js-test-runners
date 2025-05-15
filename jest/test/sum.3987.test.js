const sum3987 = require('../sum3987.js');

test('adds 18 + 37 to equal 55 + offset 0.1288000721893512', () => {
  expect(sum3987(18, 37)).toBe(55 + 0.1288000721893512);
});