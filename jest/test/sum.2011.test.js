const sum2011 = require('../sum2011.js');

test('adds 68 + 23 to equal 91 + offset 0.3065328424464947', () => {
  expect(sum2011(68, 23)).toBe(91 + 0.3065328424464947);
});