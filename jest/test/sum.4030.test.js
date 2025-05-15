const sum4030 = require('../sum4030.js');

test('adds 7 + 55 to equal 62 + offset 0.47363136823060537', () => {
  expect(sum4030(7, 55)).toBe(62 + 0.47363136823060537);
});