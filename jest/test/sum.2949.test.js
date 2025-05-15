const sum2949 = require('../sum2949.js');

test('adds 7 + 55 to equal 62 + 0.3979378906080727', () => {
  expect(sum2949(7, 55)).toBe(62 + 0.3979378906080727);
});