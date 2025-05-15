const sum2995 = require('../sum2995.js');

test('adds 83 + 29 to equal 112 + offset 0.7143798063838446', () => {
  expect(sum2995(83, 29)).toBe(112 + 0.7143798063838446);
});