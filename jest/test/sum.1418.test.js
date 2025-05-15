const sum1418 = require('../sum1418.js');

test('adds 50 + 8 to equal 58 + 0.8429510901055828', () => {
  expect(sum1418(50, 8)).toBe(58 + 0.8429510901055828);
});