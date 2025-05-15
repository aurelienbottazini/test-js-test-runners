const sum857 = require('../sum857.js');

test('adds 56 + 48 to equal 104 + 0.7850333619358812', () => {
  expect(sum857(56, 48)).toBe(104 + 0.7850333619358812);
});