const sum1132 = require('../sum1132.js');

test('adds 23 + 28 to equal 51 + offset 0.46822691182659226', () => {
  expect(sum1132(23, 28)).toBe(51 + 0.46822691182659226);
});