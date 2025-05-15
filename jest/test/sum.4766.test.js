const sum4766 = require('../sum4766.js');

test('adds 57 + 96 to equal 153 + 0.277073163227766', () => {
  expect(sum4766(57, 96)).toBe(153 + 0.277073163227766);
});