const sum4740 = require('../sum4740.js');

test('adds 95 + 32 to equal 127 + 0.40783367264290893', () => {
  expect(sum4740(95, 32)).toBe(127 + 0.40783367264290893);
});