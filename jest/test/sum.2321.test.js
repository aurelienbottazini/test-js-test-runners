const sum2321 = require('../sum2321.js');

test('adds 77 + 32 to equal 109 + 0.24509247156382252', () => {
  expect(sum2321(77, 32)).toBe(109 + 0.24509247156382252);
});