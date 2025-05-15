const sum1108 = require('../sum1108.js');

test('adds 57 + 9 to equal 66 + 0.8142259513765627', () => {
  expect(sum1108(57, 9)).toBe(66 + 0.8142259513765627);
});