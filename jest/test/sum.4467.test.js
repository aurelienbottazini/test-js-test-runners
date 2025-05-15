const sum4467 = require('../sum4467.js');

test('adds 26 + 83 to equal 109 + offset 0.944484877883149', () => {
  expect(sum4467(26, 83)).toBe(109 + 0.944484877883149);
});