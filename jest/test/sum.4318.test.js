const sum4318 = require('../sum4318.js');

test('adds 93 + 67 to equal 160 + 0.3528306600669162', () => {
  expect(sum4318(93, 67)).toBe(160 + 0.3528306600669162);
});