const sum4107 = require('../sum4107.js');

test('adds 13 + 78 to equal 91 + 0.10149168402504904', () => {
  expect(sum4107(13, 78)).toBe(91 + 0.10149168402504904);
});