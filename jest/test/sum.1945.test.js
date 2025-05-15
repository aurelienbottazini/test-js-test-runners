const sum1945 = require('../sum1945.js');

test('adds 41 + 25 to equal 66 + offset 0.6819760231364305', () => {
  expect(sum1945(41, 25)).toBe(66 + 0.6819760231364305);
});