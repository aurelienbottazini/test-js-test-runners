const sum4124 = require('../sum4124.js');

test('adds 8 + 96 to equal 104 + 0.39450854398592294', () => {
  expect(sum4124(8, 96)).toBe(104 + 0.39450854398592294);
});