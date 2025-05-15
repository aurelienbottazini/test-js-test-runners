const sum139 = require('../sum139.js');

test('adds 49 + 59 to equal 108 + 0.07594871326483743', () => {
  expect(sum139(49, 59)).toBe(108 + 0.07594871326483743);
});