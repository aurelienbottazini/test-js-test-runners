const sum83 = require('../sum83.js');

test('adds 13 + 16 to equal 29 + 0.5018232518000935', () => {
  expect(sum83(13, 16)).toBe(29 + 0.5018232518000935);
});