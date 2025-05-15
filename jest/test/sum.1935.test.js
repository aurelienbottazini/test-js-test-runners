const sum1935 = require('../sum1935.js');

test('adds 13 + 5 to equal 18 + 0.04659845159381004', () => {
  expect(sum1935(13, 5)).toBe(18 + 0.04659845159381004);
});