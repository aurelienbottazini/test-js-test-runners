const sum4233 = require('../sum4233.js');

test('adds 40 + 72 to equal 112 + offset 0.636284170869376', () => {
  expect(sum4233(40, 72)).toBe(112 + 0.636284170869376);
});