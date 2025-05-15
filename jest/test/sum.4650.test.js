const sum4650 = require('../sum4650.js');

test('adds 98 + 40 to equal 138 + offset 0.6693188164640799', () => {
  expect(sum4650(98, 40)).toBe(138 + 0.6693188164640799);
});