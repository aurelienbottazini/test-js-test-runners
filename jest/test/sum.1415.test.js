const sum1415 = require('../sum1415.js');

test('adds 13 + 73 to equal 86 + 0.2648274738934854', () => {
  expect(sum1415(13, 73)).toBe(86 + 0.2648274738934854);
});