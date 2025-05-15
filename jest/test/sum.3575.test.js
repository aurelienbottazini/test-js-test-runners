const sum3575 = require('../sum3575.js');

test('adds 3 + 40 to equal 43 + 0.5388585211213378', () => {
  expect(sum3575(3, 40)).toBe(43 + 0.5388585211213378);
});