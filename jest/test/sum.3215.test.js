const sum3215 = require('../sum3215.js');

test('adds 30 + 98 to equal 128 + 0.6169126242148032', () => {
  expect(sum3215(30, 98)).toBe(128 + 0.6169126242148032);
});