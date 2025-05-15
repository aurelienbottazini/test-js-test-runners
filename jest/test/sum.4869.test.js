const sum4869 = require('../sum4869.js');

test('adds 33 + 76 to equal 109 + 0.6500096575543354', () => {
  expect(sum4869(33, 76)).toBe(109 + 0.6500096575543354);
});