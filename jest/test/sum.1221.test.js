const sum1221 = require('../sum1221.js');

test('adds 68 + 83 to equal 151 + offset 0.6367410235645167', () => {
  expect(sum1221(68, 83)).toBe(151 + 0.6367410235645167);
});