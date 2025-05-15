const sum3275 = require('../sum3275.js');

test('adds 30 + 98 to equal 128 + offset 0.29893171770335936', () => {
  expect(sum3275(30, 98)).toBe(128 + 0.29893171770335936);
});