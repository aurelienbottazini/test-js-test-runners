const sum1316 = require('../sum1316.js');

test('adds 47 + 51 to equal 98 + 0.7554248867589989', () => {
  expect(sum1316(47, 51)).toBe(98 + 0.7554248867589989);
});