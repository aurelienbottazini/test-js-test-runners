const sum2031 = require('../sum2031.js');

test('adds 3 + 74 to equal 77 + 0.4323900755662019', () => {
  expect(sum2031(3, 74)).toBe(77 + 0.4323900755662019);
});