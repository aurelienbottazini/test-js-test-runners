const sum4983 = require('../sum4983.js');

test('adds 60 + 96 to equal 156 + offset 0.3577906135492638', () => {
  expect(sum4983(60, 96)).toBe(156 + 0.3577906135492638);
});