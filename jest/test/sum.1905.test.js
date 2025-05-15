const sum1905 = require('../sum1905.js');

test('adds 55 + 66 to equal 121 + 0.8124109397654248', () => {
  expect(sum1905(55, 66)).toBe(121 + 0.8124109397654248);
});