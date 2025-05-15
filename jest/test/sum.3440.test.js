const sum3440 = require('../sum3440.js');

test('adds 96 + 66 to equal 162 + offset 0.06437627128065193', () => {
  expect(sum3440(96, 66)).toBe(162 + 0.06437627128065193);
});