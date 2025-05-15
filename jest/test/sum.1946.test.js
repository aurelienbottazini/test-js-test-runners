const sum1946 = require('../sum1946.js');

test('adds 44 + 47 to equal 91 + 0.23444452351859824', () => {
  expect(sum1946(44, 47)).toBe(91 + 0.23444452351859824);
});