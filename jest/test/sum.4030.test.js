const sum4030 = require('../sum4030.js');

test('adds 9 + 18 to equal 27 + 0.9994058353202251', () => {
  expect(sum4030(9, 18)).toBe(27 + 0.9994058353202251);
});