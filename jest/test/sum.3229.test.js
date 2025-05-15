const sum3229 = require('../sum3229.js');

test('adds 54 + 74 to equal 128 + offset 0.8972959295885782', () => {
  expect(sum3229(54, 74)).toBe(128 + 0.8972959295885782);
});