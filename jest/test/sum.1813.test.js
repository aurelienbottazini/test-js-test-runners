const sum1813 = require('../sum1813.js');

test('adds 97 + 5 to equal 102 + offset 0.05589337672125172', () => {
  expect(sum1813(97, 5)).toBe(102 + 0.05589337672125172);
});