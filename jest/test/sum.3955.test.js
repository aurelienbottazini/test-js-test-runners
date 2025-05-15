const sum3955 = require('../sum3955.js');

test('adds 63 + 88 to equal 151 + offset 0.8748796727910956', () => {
  expect(sum3955(63, 88)).toBe(151 + 0.8748796727910956);
});