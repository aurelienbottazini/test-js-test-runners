const sum1173 = require('../sum1173.js');

test('adds 29 + 29 to equal 58 + 0.1841634831014085', () => {
  expect(sum1173(29, 29)).toBe(58 + 0.1841634831014085);
});