const sum3759 = require('../sum3759.js');

test('adds 76 + 82 to equal 158 + 0.12401509748829653', () => {
  expect(sum3759(76, 82)).toBe(158 + 0.12401509748829653);
});