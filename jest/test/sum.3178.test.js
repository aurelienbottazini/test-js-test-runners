const sum3178 = require('../sum3178.js');

test('adds 99 + 89 to equal 188 + offset 0.24632444201577985', () => {
  expect(sum3178(99, 89)).toBe(188 + 0.24632444201577985);
});