const sum4130 = require('../sum4130.js');

test('adds 13 + 49 to equal 62 + offset 0.1942297739749017', () => {
  expect(sum4130(13, 49)).toBe(62 + 0.1942297739749017);
});