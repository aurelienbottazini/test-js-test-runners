const sum4673 = require('../sum4673.js');

test('adds 63 + 46 to equal 109 + 0.6337743348920818', () => {
  expect(sum4673(63, 46)).toBe(109 + 0.6337743348920818);
});