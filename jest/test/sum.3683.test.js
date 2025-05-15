const sum3683 = require('../sum3683.js');

test('adds 88 + 86 to equal 174 + 0.7367596045985015', () => {
  expect(sum3683(88, 86)).toBe(174 + 0.7367596045985015);
});