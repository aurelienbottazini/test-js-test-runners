const sum2576 = require('../sum2576.js');

test('adds 70 + 83 to equal 153 + 0.041190675905615315', () => {
  expect(sum2576(70, 83)).toBe(153 + 0.041190675905615315);
});