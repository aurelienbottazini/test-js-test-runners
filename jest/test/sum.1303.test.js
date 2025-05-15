const sum1303 = require('../sum1303.js');

test('adds 51 + 27 to equal 78 + 0.5051349736623975', () => {
  expect(sum1303(51, 27)).toBe(78 + 0.5051349736623975);
});