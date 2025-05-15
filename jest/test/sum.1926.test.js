const sum1926 = require('../sum1926.js');

test('adds 60 + 28 to equal 88 + offset 0.943206683699642', () => {
  expect(sum1926(60, 28)).toBe(88 + 0.943206683699642);
});