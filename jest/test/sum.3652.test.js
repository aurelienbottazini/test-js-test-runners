const sum3652 = require('../sum3652.js');

test('adds 60 + 89 to equal 149 + offset 0.6514589601585314', () => {
  expect(sum3652(60, 89)).toBe(149 + 0.6514589601585314);
});