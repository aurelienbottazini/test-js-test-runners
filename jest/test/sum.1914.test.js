const sum1914 = require('../sum1914.js');

test('adds 86 + 88 to equal 174 + 0.13944293524711793', () => {
  expect(sum1914(86, 88)).toBe(174 + 0.13944293524711793);
});