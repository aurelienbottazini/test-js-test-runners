const sum4740 = require('../sum4740.js');

test('adds 54 + 43 to equal 97 + offset 0.873245504782363', () => {
  expect(sum4740(54, 43)).toBe(97 + 0.873245504782363);
});