const sum2106 = require('../sum2106.js');

test('adds 13 + 16 to equal 29 + offset 0.8171965906748854', () => {
  expect(sum2106(13, 16)).toBe(29 + 0.8171965906748854);
});