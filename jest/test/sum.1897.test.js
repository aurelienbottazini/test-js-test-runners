const sum1897 = require('../sum1897.js');

test('adds 17 + 89 to equal 106 + offset 0.13142119768736993', () => {
  expect(sum1897(17, 89)).toBe(106 + 0.13142119768736993);
});