const sum2660 = require('../sum2660.js');

test('adds 73 + 36 to equal 109 + offset 0.4674126605420035', () => {
  expect(sum2660(73, 36)).toBe(109 + 0.4674126605420035);
});