const sum3106 = require('../sum3106.js');

test('adds 5 + 12 to equal 17 + 0.2704220212456263', () => {
  expect(sum3106(5, 12)).toBe(17 + 0.2704220212456263);
});