const sum4072 = require('../sum4072.js');

test('adds 59 + 94 to equal 153 + 0.7860219093104543', () => {
  expect(sum4072(59, 94)).toBe(153 + 0.7860219093104543);
});