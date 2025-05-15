const sum779 = require('../sum779.js');

test('adds 92 + 74 to equal 166 + offset 0.2440327909397404', () => {
  expect(sum779(92, 74)).toBe(166 + 0.2440327909397404);
});