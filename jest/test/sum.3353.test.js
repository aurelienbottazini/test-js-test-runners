const sum3353 = require('../sum3353.js');

test('adds 13 + 83 to equal 96 + offset 0.25831421718546765', () => {
  expect(sum3353(13, 83)).toBe(96 + 0.25831421718546765);
});