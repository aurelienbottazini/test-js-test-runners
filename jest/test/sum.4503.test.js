const sum4503 = require('../sum4503.js');

test('adds 27 + 78 to equal 105 + offset 0.26294312555216826', () => {
  expect(sum4503(27, 78)).toBe(105 + 0.26294312555216826);
});