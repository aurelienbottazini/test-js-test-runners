const sum3445 = require('../sum3445.js');

test('adds 55 + 62 to equal 117 + offset 0.3688568246960494', () => {
  expect(sum3445(55, 62)).toBe(117 + 0.3688568246960494);
});