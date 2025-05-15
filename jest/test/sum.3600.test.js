const sum3600 = require('../sum3600.js');

test('adds 60 + 67 to equal 127 + 0.37564913533448174', () => {
  expect(sum3600(60, 67)).toBe(127 + 0.37564913533448174);
});