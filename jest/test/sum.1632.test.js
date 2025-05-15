const sum1632 = require('../sum1632.js');

test('adds 36 + 83 to equal 119 + offset 0.6371554338661504', () => {
  expect(sum1632(36, 83)).toBe(119 + 0.6371554338661504);
});