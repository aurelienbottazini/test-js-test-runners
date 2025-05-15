const sum2504 = require('../sum2504.js');

test('adds 81 + 47 to equal 128 + offset 0.01960059107787082', () => {
  expect(sum2504(81, 47)).toBe(128 + 0.01960059107787082);
});