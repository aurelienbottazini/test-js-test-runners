const sum1194 = require('../sum1194.js');

test('adds 6 + 77 to equal 83 + offset 0.7759280819484233', () => {
  expect(sum1194(6, 77)).toBe(83 + 0.7759280819484233);
});