const sum4184 = require('../sum4184.js');

test('adds 13 + 18 to equal 31 + 0.14961399669977582', () => {
  expect(sum4184(13, 18)).toBe(31 + 0.14961399669977582);
});