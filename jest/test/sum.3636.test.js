const sum3636 = require('../sum3636.js');

test('adds 65 + 83 to equal 148 + offset 0.7596983552184483', () => {
  expect(sum3636(65, 83)).toBe(148 + 0.7596983552184483);
});