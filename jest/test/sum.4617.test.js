const sum4617 = require('../sum4617.js');

test('adds 90 + 14 to equal 104 + offset 0.08164642381927811', () => {
  expect(sum4617(90, 14)).toBe(104 + 0.08164642381927811);
});