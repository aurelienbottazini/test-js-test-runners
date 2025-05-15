const sum3295 = require('../sum3295.js');

test('adds 13 + 36 to equal 49 + offset 0.17669097391682675', () => {
  expect(sum3295(13, 36)).toBe(49 + 0.17669097391682675);
});