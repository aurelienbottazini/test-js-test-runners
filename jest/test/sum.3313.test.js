const sum3313 = require('../sum3313.js');

test('adds 75 + 15 to equal 90 + 0.4480940793734932', () => {
  expect(sum3313(75, 15)).toBe(90 + 0.4480940793734932);
});