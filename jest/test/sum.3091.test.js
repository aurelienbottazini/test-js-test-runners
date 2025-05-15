const sum3091 = require('../sum3091.js');

test('adds 86 + 80 to equal 166 + offset 0.3745295169784113', () => {
  expect(sum3091(86, 80)).toBe(166 + 0.3745295169784113);
});