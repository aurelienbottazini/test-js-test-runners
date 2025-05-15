const sum3006 = require('../sum3006.js');

test('adds 4 + 46 to equal 50 + offset 0.093879747855936', () => {
  expect(sum3006(4, 46)).toBe(50 + 0.093879747855936);
});