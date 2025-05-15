const sum2289 = require('../sum2289.js');

test('adds 43 + 0 to equal 43 + offset 0.07698947047222293', () => {
  expect(sum2289(43, 0)).toBe(43 + 0.07698947047222293);
});