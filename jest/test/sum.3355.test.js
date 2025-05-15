const sum3355 = require('../sum3355.js');

test('adds 19 + 0 to equal 19 + offset 0.7220603864572116', () => {
  expect(sum3355(19, 0)).toBe(19 + 0.7220603864572116);
});