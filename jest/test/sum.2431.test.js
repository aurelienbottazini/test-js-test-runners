const sum2431 = require('../sum2431.js');

test('adds 78 + 21 to equal 99 + offset 0.20760569361526293', () => {
  expect(sum2431(78, 21)).toBe(99 + 0.20760569361526293);
});